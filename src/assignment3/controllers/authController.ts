import { Request, Response , NextFunction} from "express";
import jwt from "jsonwebtoken";

const secret_key = process.env.JWT_SECRET as string;

export const login = (req: Request, res: Response , next : NextFunction) => {
  const { email, password } = req.body;

  if (email !== "mustafa@gmail.com" || password !== "1234") {
    return next(new Error('Error thrown'));
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const payload = { email };

  const token = jwt.sign(payload, secret_key, { expiresIn: "1h" });

  return res.json({ token });
};
