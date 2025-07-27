import { Request, Response, NextFunction } from "express";
import bcrypt, { compare } from "bcrypt";
import { loginUser } from "../services/user.service";
import jwt from "jsonwebtoken";

export const handleRegisterMiddleware = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const password = req.body.password;
        const hashedPassword = await bcrypt.hash(password, 10);

        req.body.password = hashedPassword;
        next(); 
    } catch(err) {
        console.error('Error while hashing password', err);
    }
}

export const handleLoginMiddleware = async (req : Request, res : Response, next : NextFunction)  => {
    
    try {
        console.log("3");
        const user = await loginUser(req.body);
        console.log("User in middleware", user);

        if(!user) {
            console.log("User not get");
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const password = req.body.password;
        console.log("Password", typeof password);
        console.log("User password",typeof  user.password);
        const isValidPassword = await bcrypt.compare(password, user.password);

        if(!isValidPassword) {  
            console.log("Invalid Password");
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({userId : user._id}, process.env.SECRET_KEY as string, { expiresIn: '1h' });
        console.log("Token", token);
        res.status(200).json({ message: "Login successful", token });
        next();
        
    } catch(err) {
        console.error('Error in handleLoginMiddleware', err);
    }
}