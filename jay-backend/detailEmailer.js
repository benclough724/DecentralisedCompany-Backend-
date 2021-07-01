const express = require('express')
const emailData = './App.js'

var transporter = nodemailer.createTransport({
    service: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    tls: {
      ciphers: 'SSLv3'
    },
    auth: {
      user: "ben_clough123@outlook.com",
      pass: "Cooperdrummer123"
    }
  });
  var options = 
  {
      from: 'ben_clough123@outlook.com',
      to: 'ben.clough04@outlook.com',
      //subject: 'First Name: ' + firstName + 'Second Name: ' + secondName,
      html: '<b>This is bold text</b>',
      text: 'This is text version!'
  };  
      
  app.get('App.js/', (req, res) => {
    transporter.sendMail(options, function(error, info)
    {
        if(error)
        {
          return console.log(error, options);
          console.log
        }
        console.log("Sent: " + info.response);
        
    })
  }) 