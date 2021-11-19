// import external module for send mail
const nodemailer = require("nodemailer");

// import internal module
const content = require('./bot-scrap') 

// Get actual date
let date = new Date();
let day  = date.getDate()
let month  = date.getMonth()
let year  = date.getFullYear()
let hour = date.getHours()       
let min  = date.getMinutes()     

// mail data
const $user = '*************@gmail.com' // write your e-mail here
const $senha = '*********'              // write your password here


// async function for send email. See more in https://nodemailer.com/about/
async function main() {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // write your smtp email host here
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: $user, 
      pass: $senha, 
    },
  });

  // Get sinapi data with bot-scrap
  const message = await content.bot()

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'SINAPI 🤖" <***********@gmail.com>', // sender address
    to: "*********@gmail.com", // list of receivers
    subject: `SINAPI ${day}/${month}/${year} - ${hour}:${min}`, // Subject line
    text: "SINAPI by ******* bot", // plain text body
    html: `${message}` // html body
  });

  console.log(`Mail sent - ${day}/${month}/${year} - ${hour}:${min}`);
}

main().catch(console.error);
