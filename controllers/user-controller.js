import { User } from "../models/user-model.js";
import { userValidator, loginValidator } from "../validators/user-validator.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { sendEmail } from "../utils/mailing.js";




export const registerUser = async (req, res, next) => {
  try{
    const {error, value} = userValidator.validate(req.body)
    if (error) {
     return res.status(400).json({message: error.details[0].message})
    }
    const existingUser = await User.findOne({email: value.email})
    if (existingUser) {
      return res.status(409).json({message: "User already exists"})
    }else{
      const hashedPassword = await bcrypt.hash(value.password, 12)
      const newUser = await User.create({
        userName : value.userName,
        email: value.email,
        password : hashedPassword
      })

     const sendWelcomeEmail = sendEmail(newUser.email, "Welcome to My Notes App! 🎉", `${newUser.userName}`);

console.log(sendWelcomeEmail)

    return  res.status(201).json ({
        message: "User created successfully",
        data: newUser
      })
      
    }
      
    }catch (error) {
      next(error)
    }

  }


export const loginUser = async (req, res, next) => {
try {
  const {error, value} = loginValidator.validate(req.body);
  if (error) {
   return res.status(400).json({message: error.details[0].message})
  }
  const existingUser = await User.findOne({email: value.email})
  console.log('existingUser',existingUser)
  if (!existingUser) {
   return res.status(401).json({message: "Invalid Email"})
  }
  const comparePassword = await bcrypt.compare (value.password, existingUser.password)
  console.log("comparePassword",comparePassword)
  if (!comparePassword) {
    return res.status(401).json({message: "Invalid Password"})
   }
  return res.status(200).json({message: "Login Sucessful"})

  

} catch (error) {
  next(error)
}
}



