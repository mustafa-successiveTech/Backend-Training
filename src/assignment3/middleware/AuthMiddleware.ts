import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret_key = process.env.JWT_SECRET as string;

function AuthMiddleware( req: Request, res: Response, next: NextFunction): Response | void {
  const authHeader = req.headers.authorization as string;
  console.log(authHeader);
  //   if (
  //     !authHeader ||
  //     typeof authHeader !== "string" ||
  //     !authHeader.startsWith("Bearer ")
  //   ) {
  //     return res
  //       .status(401)
  //       .json({ message: "Unauthorized: Missing or malformed token" });
  //   }

  console.log(authHeader, "hgcjycycjhcvkuvkj,hv");
  const authToken = authHeader && authHeader.split(" ")[1];

  if (!authToken) {
    return res.status(401).json({ message: "Token missing" });
  }

  jwt.verify(authToken, secret_key, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expires token" });
    }
    req.user = decoded as JwtPayload;
    console.log(req.user);
    next();
  });
}

export default AuthMiddleware;
