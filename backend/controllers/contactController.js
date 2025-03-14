

// import asyncHandler from '../middleware/asyncHandler.js';
// import ContactMessage from '../models/contactModel.js';
// import sendEmail from '../utils/email.js';
// import sendSMS from '../utils/sendSMS.js'; 

// // @desc  Create a new contact message
// // @route POST /api/contact
// // @access Public
// const sendContactMessage = asyncHandler(async (req, res) => {
//     const { name, email, phone, subject, message } = req.body;

//     if (!name || !email || !subject || !message) {
//         res.status(400);
//         throw new Error('Please fill in all required fields');
//     }

//     const contactMessage = await ContactMessage.create({
//         name,
//         email,
//         phone,
//         subject,
//         message,
//     });

//     if (contactMessage) {
//         const formattedEmail = email.toString().trim();

//         // Send email notification
//         const emailSent = await sendEmail(
//             formattedEmail,
//             `New Contact Us Message from ${name}`,
//             `You have a new contact request:
            
//             **Name:** ${name}
//             **Email:** ${formattedEmail}
//             **Phone:** ${phone || 'Not provided'}
//             **Subject:** ${subject}
            
//             **Message:**
//             ${message}
            
//             Please log in to the admin panel to respond.`
//         );

//         if (!emailSent) {
//             console.error("Failed to send email notification");
//         }

//         // Send SMS notification
//         const smsSent = await sendSMS(
//             `New Contact Us Message from ${name}. Check your email for details.`
//         );

//         if (!smsSent) {
//             console.error("Failed to send SMS notification");
//         }

//         res.status(201).json({ message: 'Your message has been sent successfully' });
//     } else {
//         res.status(500);
//         throw new Error('Failed to send contact message');
//     }
// });

// export { sendContactMessage };




import asyncHandler from '../middleware/asyncHandler.js';
import sendEmail from '../utils/email.js';

// @desc  Send a new contact message via email
// @route POST /api/contact
// @access Public
const sendContactMessage = asyncHandler(async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        res.status(400);
        throw new Error('Please fill in all required fields');
    }

    const formattedEmail = email.toString().trim();

    // Send email notification (Direct to your admin email)
    const emailSent = await sendEmail(
        process.env.ADMIN_EMAIL, // Change this to your actual email
        `New Contact Us Message from ${name}`,
        `You have a new contact request:

        **Name:** ${name}
        **Email:** ${formattedEmail}
        **Phone:** ${phone || 'Not provided'}

        **Message:**
        ${message}`
    );

    if (!emailSent) {
        console.error("Failed to send email notification");
        res.status(500);
        throw new Error('Failed to send contact message');
    }

    res.status(200).json({ message: 'Your message has been sent successfully' });
});

export { sendContactMessage };
