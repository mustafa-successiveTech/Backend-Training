import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export const authRouteMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  console.log("AuthHeader : ", authHeader);
  if (!authHeader || !authHeader?.startsWith('Bearer '))
    return res.status(401).json({ message: "No token provided" });

  const token: string = authHeader.split(" ")[1];
  console.log("Token : ", token);

  try {
    const decode = verifyToken(token);
    (req as any).user = decode;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export const allowRoles = (...roles : string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if(!roles.includes(req.body.role)) {
            return res.status(403).json({ message: "Forbidden" });
        }
        next();
    }
}
