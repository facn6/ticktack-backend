const nodeMailer = require('nodemailer');


module.exports.sendContactEmail = ((req, res, next) => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      // should be replaced with real sender's account
      user: 'webticktack.noreply@gmail.com',
      pass: '123456789tic*',
    },
  });
  const mailOptions = {
    // should be replaced with real recipient's account
    to: req.body.mail,
    subject: 'מבצעים חמים!!!',
    html: '<h1>תודה על ההרשמה </h1>+ <p>נשלח אליך מבצעים חמים בהקדם</>',
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
  res.end();
});
