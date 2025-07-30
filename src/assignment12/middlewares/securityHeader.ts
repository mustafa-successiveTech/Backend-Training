import { Request, Response, NextFunction } from "express";

export class securityHeader {
    public static apply(req : Request, res : Response, next : NextFunction) : void {
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.setHeader("X-Frame-Options", "DENY");
        next();
    }
};