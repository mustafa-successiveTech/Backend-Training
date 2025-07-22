import {Request, Response, NextFunction } from "express";

function LogMiddleware(req : Request, res : Response, next : NextFunction) {
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}], ${req.method} ${req.originalUrl}`);
    next();
};

export default LogMiddleware;