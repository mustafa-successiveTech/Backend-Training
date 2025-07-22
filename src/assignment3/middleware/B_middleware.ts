import { Request, Response, NextFunction } from "express";

export default function B_middleware(req : Request, res : Response, next : NextFunction){
    const my_Url = req.url;
    const my_Method = req.method;
    console.log(`[${my_Method}] ${my_Url} B_middleware`);
    next();
};