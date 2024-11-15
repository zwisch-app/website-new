const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  host: 'your-smtp-host',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@example.com',
    pass: 'your-email-password'
  }
});

app.post('/submit-waitlist', (req, res) => {
  const email = req.body.email;

  // Send email to admin
  const mailOptions = {
    from: 'your-email@example.com',
    to: 'admin@zwisch.app',
    subject: 'New Waitlist Signup',
    text: `A new user has signed up for the Zwisch waitlist: ${email}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('An error occurred');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Thank you for signing up!');
    }
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/terms-and-conditions', (req, res) => {
  res.sendFile(__dirname + '/terms_and_conditions.html');
});

app.get('/privacy-policy', (req, res) => {
  res.sendFile(__dirname + '/privacy_policy.html');
});

// Redirect route for optinexus
app.get('/optinexus', (req, res) => {
  res.redirect('https://voltient.com');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});