var express =require("express");
var router = express.Router();
const cors = require('cors')
const nodemailer = require('nodemailer'); 
const { request, response } = require("../app");

var app = express();
app.use(cors())

router.post('/', function(req,res,next){
  
    var data2 = req.body
    let data = req.body
    var subject = data2.name  
    let message = data.message
    let email = data.email
    
    let mailTransporter = nodemailer.createTransport({ 
        host: "smtp.mailtrap.io",
        port: 2525,
        service: 'gmail', 
        auth: { 
            user: 'vipul.joshi@trejhara.com', 
            pass: 'T0233T0233'
        },
        
        tls: {rejectUnauthorized: false}
    }); 
    
    let mailDetails = { 
        from: 'vipul.joshi@trejhara.com', 
        to: 'joshivipul097@gmail.com', 
        subject: 'Email Form VipulTechWeb', 
        text: 'The Name of client is : '+subject +' ,' +'message is : ' +message +' ,' + 'and email of client is :'+email
                    }; 
    
    mailTransporter.sendMail(mailDetails, (error,info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Email sent: ' + info.response);
        response.write('email sent'); 
      });
});
module.exports=router;

