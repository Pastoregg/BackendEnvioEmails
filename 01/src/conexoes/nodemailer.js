const nodemailer = require('nodemailer')

const transportador = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    host: 465,
    auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})

module.exports = transportador