const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_MAIL_KEY } = process.env;

sgMail.setApiKey(SENDGRID_MAIL_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "volochan.andrey@gmai.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
