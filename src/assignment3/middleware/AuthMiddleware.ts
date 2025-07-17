import {Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

export interface JwtPayload {
  user: number;
  email: string;
}

const secret_key = process.env.jwt_secret as string;

function AuthMiddleware(req: Request, res: Response, next: NextFunction) : Response | void {
  const authHeader = req.headers["authorization"] as string | undefined;
  const authToken = authHeader && authHeader.split(" ")[1];

  if (!authToken) {
    return res.status(401).json({ message: "Token missing" });
  }

  jwt.verify(authToken, secret_key, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expires token" });
    }
    req.user = decoded as JwtPayload;
    next();
  });
}

export default AuthMiddleware;
