import { Request, Response,  NextFunction } from "express";

export default function ErrorHandlingMiddleware(err : Error, req : Request, res : Response, next : NextFunction){
    if (err ) {
        console.error(err);
        res.status(500).json({error : err.message || "Internal Server Error" });
    } else {
        console.log("Fine");
        next();
    }
};