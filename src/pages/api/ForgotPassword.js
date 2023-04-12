export default function handler(req, res) {
    if (req.method === 'POST') {
        const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'richwaydev01@gmail.com',
    pass: 'Olashile$1'
  }
});

const mailOptions = {
  from: 'richwaydev01@gmail.com',
  to: 'bankoleonaara72@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email from nodemailer.'
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
      // Handle forgot password logic here
      const { email } = req.body;
      // Send reset password email to the user's email address
      res.status(200).json({ success: true });
    } else {
      // Return error response for unsupported HTTP method
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }