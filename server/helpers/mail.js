const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

require("dotenv").config();

const auth = {   
  auth: {
    API_KEY: process.env.API_KEY,
    DOMAIN: process.env.DOMAIN ,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailer = (email, subject, message, cb) => {
  const mailOptions = {
    from: email,
    to: "victoryohanna@gmail.com",
    subject,
    text: message,
  };

  transporter.sendMail(mailOptions, function (err, result) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result);
    }
  });
};

module.exports = mailer;
