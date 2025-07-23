import { Request, Response, NextFunction } from "express";

export interface IErrorTestController {
    throwAsynError(req : Request, res : Response, next : NextFunction) : Promise<void>;
}