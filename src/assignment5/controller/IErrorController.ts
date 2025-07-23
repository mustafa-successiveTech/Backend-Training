import { Request, Response, NextFunction } from "express";
import { IErrorTestController } from "../interface/IErrorInterface";
import createError from "http-errors";

export class ErrorTestController implements IErrorTestController {
  private static instance: ErrorTestController;

  private constructor() {}

  public static getInstance(): ErrorTestController {
    if (!ErrorTestController.instance) {
      ErrorTestController.instance = new ErrorTestController();
    }
    return ErrorTestController.instance;
  }
  async throwAsyncError(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await Promise.reject(new Error("Something went wrong"));
    } catch (err: any) {
      next(createError(500, err.message));
    }
  }
}
