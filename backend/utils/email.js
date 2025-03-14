// import nodemailer from 'nodemailer';

// const sendEmail = async (email, subject, text) => {
//     try {
//         // **Ensure the email field is properly formatted**
//         if (!email || typeof email !== 'string' || email.trim() === '') {
//             console.error("Invalid recipient email:", email);
//             throw new Error('Recipient email is missing or invalid');
//         }

//         // **Ensure email is a proper string (for safety)**
//         email = email.toString().trim();  

//         const transporter = nodemailer.createTransport({
//             service: 'gmail', 
//             auth: {
//                 user: process.env.GMAIL_USER,
//                 pass: process.env.GMAIL_PASS,
//             },
//         });

//         // **Ensure correct email format**
//         const mailOptions = {
//             from: process.env.EMAIL_FROM || process.env.GMAIL_USER,
//             to: email,  // Make sure this is a plain string, not an object or array
//             subject: subject.trim(),
//             text: text.trim(),
//         };

//         console.log("Sending email with options:", JSON.stringify(mailOptions, null, 2));

//         // **Send email and properly handle errors**
//         const info = await transporter.sendMail(mailOptions);

//         console.log("Email sent successfully:", info.messageId);

//         return true; 
//     } catch (error) {
//         console.error("Error sending email:", error);
//         return false;  
//     }
// };

// export default sendEmail;



import nodemailer from 'nodemailer';

const sendEmail = async (recipient, subject, text) => {
    try {
        if (!recipient || typeof recipient !== 'string' || recipient.trim() === '') {
            console.error("Invalid recipient email:", recipient);
            throw new Error('Recipient email is missing or invalid');
        }

        recipient = recipient.toString().trim();  

        const transporter = nodemailer.createTransport({
            service: 'gmail', 
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_FROM || process.env.GMAIL_USER,
            to: recipient,  
            subject: subject.trim(),
            text: text.trim(),
        };

        console.log("Sending email to:", recipient);

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.messageId);

        return true; 
    } catch (error) {
        console.error("Error sending email:", error);
        return false;  
    }
};

export default sendEmail;

