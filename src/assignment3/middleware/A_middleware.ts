import { Request, Response, NextFunction } from "express";

export default function A_middleware(req : Request, res : Response, next : NextFunction) {
    const my_url = req.url;
    const my_method = req.method;
    console.log(`[${my_method}] ${my_url} A_middleware`);
    next();
};