const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

require("dotenv").config();


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE_PROVIDER,
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
    },
    port: 587, // Specify the port number here
    secure: false, // Set secure to false for STARTTLS encryption
});
  

// API endpoint to handle sending confirmation emails
app.post("/send-confirmation-email", (req, res) => {
  const { to, subject, html } = req.body;

  const mailOptions = {
    from: "YOUR_EMAIL_ADDRESS",
    to,
    subject,
    html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error sending email" });
    } else {
      console.log("Confirmation email sent:", info.response);
      res.json({ success: "Confirmation email sent" });
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});