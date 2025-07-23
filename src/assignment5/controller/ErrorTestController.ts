import { Request, Response, NextFunction } from "express";
import { IErrorTestController } from "../interface/IErrorTestController";
import createError from 'http-errors';

export class ErrorTestController implements IErrorTestController {
    async throwAsynError(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            await Promise.reject(new Error("Something went wrong"));
        } catch(err : any) {
            next(createError(500, err.message));
        }
    }
}