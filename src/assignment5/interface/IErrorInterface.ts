import {Request, Response, NextFunction } from "express";

export interface IErrorTestController {
  throwAsyncError(req: Request, res: Response, next: NextFunction): Promise<void>;
}
