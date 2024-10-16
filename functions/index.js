/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
/* eslint-disable @typescript-eslint/no-require-imports */
const functions = require('firebase-functions/v2');
const { defineSecret } = require('firebase-functions/params');
const { onCall, HttpsError } = functions.https;
const { logger } = functions;
const sgMail = require('@sendgrid/mail');

// Set global options to limit function instances
functions.setGlobalOptions({ maxInstances: 10 });

// Define the SendGrid API key as a secret
const SGapiKey = defineSecret('SENDGRID_APIKEY');

exports.submitContactForm = onCall({ secrets: [SGapiKey] }, async (data) => {
  // Set the SendGrid API key
  sgMail.setApiKey(SGapiKey.value());
  logger.info('SendGrid API key has been set');

  // Extract form data
  const { name, email, company, message } = data.data;

  // Validate form data
  if (!name || !email || !message) {
    logger.warn('Missing required fields', { name, email, message });
    throw new HttpsError('invalid-argument', 'Missing required fields');
  }


  try {
    // Prepare email content
    const msg = {
      to: 'contact@secondphase.com.au', // Replace with your email address
      from: 'contact@secondphase.com.au', // Replace with your verified sender
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
    };

    // Send email using SendGrid
    await sgMail.send(msg);

    logger.info('Email sent successfully', { recipient: msg.to });
    return { success: true, message: 'Form submitted successfully' };
  } catch (error) {
    if (error.code === 429) {
      logger.warn('SendGrid rate limit reached', { error: error.message });
      throw new HttpsError('resource-exhausted', 'Daily email limit reached. Please try again later.');
    } else {
      logger.error('Error sending email', { error: error.message });
      throw new HttpsError('internal', 'Failed to send email');
    }
  }
});
