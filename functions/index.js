/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require(" MarkdownAstroData,/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
/* eslint-disable @typescript-eslint/no-require-imports */
// functions/index.js
const functions = require('firebase-functions/v2');
const { defineSecret } = require('firebase-functions/params');
const { google } = require('googleapis');
const { logger } = functions;

// Define Gmail secret
const gmailKeySecret = defineSecret('GMAIL_SERVICE_ACCOUNT_KEY');

// Limit concurrent instances
functions.setGlobalOptions({ maxInstances: 10 });

exports.submitContactForm = functions.https.onRequest(
  { secrets: [gmailKeySecret] },
  async (req, res) => {
    // --- CORS preflight handling ---
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.status(204).send('');

    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    const { name, email, company, message , address } = req.body.data;
    
    if (address && address.trim() !== '') {
      return res.status(400).send('Spam detected');
    }

    if (!name || !email || !message) return res.status(400).send('Missing required fields');

    try {
      // Parse secret
      const keyJson = JSON.parse(await gmailKeySecret.value());
      const privateKey = keyJson.private_key.replace(/\\n/g, '\n');
      logger.info('Using service account:', keyJson.client_email);

      // JWT auth for Gmail API
      const auth = new google.auth.JWT({
        email: keyJson.client_email,
        key: privateKey,
        scopes: ['https://www.googleapis.com/auth/gmail.send'],
        subject: 'john.patterson@secondphase.com.au', // user to impersonate
      });

      await auth.authorize();
      const gmail = google.gmail({ version: 'v1', auth });

      // Prepare raw email
      const rawMessage = [
        'Content-Type: text/plain; charset="UTF-8"',
        'MIME-Version: 1.0',
        'to: "Second Phase Contact" <contact@secondphase.com.au>',
        'from: "Website" <website@secondphase.com.au>',
        'subject: New Contact Form Submission',
        '',
        `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
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

      logger.info('Email sent successfully');
      return res.send({ success: true, message: 'Form submitted successfully' });

    } catch (err) {
      // Log full Gmail API error
      logger.error('Error sending email:', err.response?.data || err.message || err);
      return res.status(500).send(`Failed to send email: ${err.message}`);
    }
  }
);
