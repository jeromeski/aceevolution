const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin')
const config = functions.config()

admin.initializeApp()

const transporter = nodemailer.createTransport({
  service: 'Gmail', auth: {
    user: config.user.email, pass: config.user.password
  }
})

let mailOptions = {from: 'Arc Development', to: 'jerprojone@gmail.com', subject: 'Testing nodemailer', text: 'Test successful' }

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendMail = functions.https.onRequest((request, response) => {
 transporter.sendMail(mailOptions,error => {
   if (error) {
     response.send(error)
   } else {
     response.send('Message sent successfully');
   }
 });
});
