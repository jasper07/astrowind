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
const { onCall, HttpsError } = functions.https;
const { logger } = functions;
const { defineSecret } = require('firebase-functions/params');
const { google } = require('googleapis');

// Load the secret
const gmailKeySecret = defineSecret("GMAIL_SERVICE_ACCOUNT_KEY");

functions.setGlobalOptions({ maxInstances: 10 });

exports.submitContactForm = onCall({ secrets: [gmailKeySecret] }, async (data) => {
  const { name, email, company, message } = data.data;

  if (!name || !email || !message) {
    logger.warn('Missing required fields', { name, email, message });
    throw new HttpsError('invalid-argument', 'Missing required fields');
  }

  try {
    // Parse the JSON key
    const key = JSON.parse(gmailKeySecret.value());

    // Authenticate with Gmail API
    const auth = new google.auth.JWT(
      key.client_email,
      null,
      key.private_key.replace(/\\n/g, '\n'),
      ['https://www.googleapis.com/auth/gmail.send'],
      'contact@secondphase.com.au' // the user to impersonate
    );

    const gmail = google.gmail({ version: 'v1', auth });

    // Build the email
    const rawMessage = [
      'Content-Type: text/plain; charset="UTF-8"',
      'MIME-Version: 1.0',
      'to: contact@secondphase.com.au',
      'from: contact@secondphase.com.au',
      'subject: New Contact Form Submission',
      '',
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`
    ].join('\n');

    const encodedMessage = Buffer.from(rawMessage)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    // Send email
    await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw: encodedMessage },
    });

    logger.info('Email sent successfully', { recipient: 'contact@secondphase.com.au' });
    return { success: true, message: 'Form submitted successfully' };

  } catch (error) {
    logger.error('Error sending email', { error: error.message });
    throw new HttpsError('internal', 'Failed to send email');
  }
});
