import { Request, Response, NextFunction } from "express";
import userSchema from "../schemas/JoiValidationSchema";

export default function joiValidatorMiddleware(req : Request, res : Response , next : NextFunction) : Response | void {
    const {error , value} = userSchema.validate(req.body );
    console.log('Inside Joi Validator Middleware');

    if (error) {
        console.log(error);
        return res.status(400).json({ errors: error.message });
    }

    req.body = value;
    console.log(req.body);

    next();
}