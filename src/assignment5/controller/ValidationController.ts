import { Request, Response, NextFunction } from "express";
import { IValidationController } from "../interface/IValidationController";
import  createError from 'http-errors';

export class validationController implements IValidationController {
    public validateIdAndName(req: Request, res: Response, next: NextFunction): void {
        const id = Number(req.params.id);
        const name = req.query.name as string;

        if (isNaN(id)) {
            return next(createError(400, 'ID parameter must be a number'));
        }

        if (!name || name.length < 3) {
            return next(createError(400, 'Query parameter "name" is required and must be at least 3 characters'));
        }

        res.json({ message: `Validated! ID: ${id}, Name: ${name}` });
    }
}