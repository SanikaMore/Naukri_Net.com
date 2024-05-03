// emailService.js
const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, html) => {
    // Create transporter with your email service provider details
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_ADDRESS, // Use the environment variable for the email address
            pass: process.env.EMAIL_PASSWORD
        }
    });

    // Construct email message
    let mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        to,
        subject,
        html
    };

    // Send email
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = { sendEmail };
