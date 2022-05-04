"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function emailer(email) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  //let testAccount = await nodemailer.createTestAccount();
  let testUser = 'bootcampforum@yahoo.com';
  let testPass = 'rlgixojmncutydvz'
  let welcomeMessage = `
  Hello, and welcome to Bootcamp Forum.
  On this site, you may view and post messages with your fellow bootcamp students and graduates.
  Stay connected and help your peers in their career paths. Whether you have a job offer, 
  an interview, or just some helpful advice, post and share here.

  Thank you for using Bootcamp Forums. And we hope your new career brings you great happiness!
  `
  //'project2team8';

// bootcampForum Yahoo PW: rlgixojmncutydvz

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testUser, // generated ethereal user
      pass: testPass, // generated ethereal password
    },
  });
// midth002@gmail.com, lsmarchetti01@gmail.com
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Bootcamp Forum 👻" <bootcampforum@yahoo.com>', // sender address
    to: email, // list of receivers
    subject: "Hello Team 8 ✔", // Subject line
    text: welcomeMessage, // plain text body
    html: `<b>${welcomeMessage}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

//emailer().catch(console.error);

module.exports = emailer;