import AuthUser from "../models/user.model";
import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { generateToken } from "../utils/jwt";

export const handleRegisterController = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;
  console.log("Role", role);

  const ExistingUser = await AuthUser.findOne({ email });
  if(ExistingUser) return res.status(400).json({message : "User already exits"});

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password : ", hashedPassword);

  const user = await AuthUser.create({name, email, role , password : hashedPassword});
  console.log("User :", user);

  res.status(201).json({message : "User created successfully"});

};

export const handleLoginController = async (req: Request, res: Response) => {
    const {email, password} = req.body;

    if(!email || !password) return res.status(400).json({message : "Please provide both email and password"});

    const user = await AuthUser.findOne({email});
    if(!user) return res.status(401).json({message : "User doesn't exist"});

    const isValid = await bcrypt.compare(password, user.password);
    console.log("Isvalid :", isValid);

    if(!isValid) return res.status(400).json({message : "Invalid password"});

    const token = generateToken(user._id.toString(), user.role);
    console.log("Token :", token);
    res.json({token});
}


