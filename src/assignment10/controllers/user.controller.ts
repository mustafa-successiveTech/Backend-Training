import { Request, Response } from "express";
import { loginUser, registerUser } from "../services/user.service";

export const handleRegisterController = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body);
    console.log(user);
    res.status(201).json("User Created");
  }catch (err) {
    console.log(err);
  } 
};

export const handleLoginController = async (req: Request, res: Response) => {
  try {
    const user = await loginUser(req.body);
    if(!user) {
        console.log("User controller");
        return res.status(401).json("Invalid Credentials");
    }
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(403).json("Forbidden");
  }
};
