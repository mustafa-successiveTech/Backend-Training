import { Request, Response, NextFunction } from "express";

export interface IValidationController {
    validateIdAndName(req : Request, res : Response, next : NextFunction) : void;
}