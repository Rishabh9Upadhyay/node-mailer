const http = require("http");
const nodemailer = require("nodemailer");

const auth = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
        user: "sirrishabh7@gmail.com",
        pass: "vwkoyuoiqpfrbldg"
    }
});
const receiver = {
    from: "sirrishabh7@gmail.com",
    to: "ru33653@gmail.com",
    subject: "Node.Js Mail Testing",
    text: `This is you OTP ${Math.floor(Math.random()*10000)}`
}
auth.sendMail(receiver,(error,emalResponce)=>{
    if(error){
        throw error;
    }
    console.log("Success!");
    responce.end();
})
