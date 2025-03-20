import nodemailer from "nodemailer";
import "dotenv/config"
import fs from "fs"


const transporter = nodemailer.createTransport({
  service: "gmail", // Use Gmail's SMTP service
  port : 587,
  secure : false,
  auth: {
    user: process.env.USER_EMAIL, // Replace with your Gmail address
    pass: process.env.USER_PASSWORD,    // Replace with your generated App Password
  },
})

`<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Welcome to My Notes App</title>
</head>
<body style="font-family: Arial, sans-serif; color: #333; background-color: #f4f4f4; padding: 20px;">
    <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
            <td align="center">
                <table width="600px" cellpadding="20" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
                    <tr>
                        <td align="center">
                            <h2 style="color: #2c3e50;">Welcome to My Notes App</h2>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Dear <strong>Lois</strong>,</p>
                            <p>Thank you for signing up for My Notes App. We are excited to have you on board and lo
`

export const sendEmail = async (to,subject, userName) => {
    const emailTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to My Notes App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 50px auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
        }
        .btn {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            background-color: #007BFF;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
        }
        .btn:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to My Notes App</h1>
        <p>Keep your thoughts, ideas, and to-do lists organized in one place.</p>
        <a href="#" class="btn">Get Started</a>
    </div>
</body>
</html>
`
  const send = await transporter.sendMail(
   { from : process.env.USER_EMAIL,
      to : to,
      subject : subject,
      html : emailTemplate 
   });
   console.log("email sent", send)
}