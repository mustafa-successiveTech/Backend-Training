import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import { IStatusController } from "../interface/IStatusController";

export class StatusController implements IStatusController {
  ok(req: Request, res: Response): void {
    res.status(200).send("OK");
  }

  create(req: Request, res: Response): void {
    res.status(201).send("CREATED");
  }

  delete(req: Request, res: Response): void {
    res.status(204).send();
  }

  redirectPermanent(req: Request, res: Response): void {
    res.redirect(301, "/redirect-permanent");
  }

  redirectTemporary(req: Request, res: Response): void {
    res.redirect(302, "/redirect-temporary");
  }

  methodNotAllowed(req: Request, res: Response, next: NextFunction): void {
    if (req.method !== "GET") {
      return next(createError(405, "Method Not Allowed"));
    }
    res.send("Method Allowed");
  }

  internalError(req: Request, res: Response, next: NextFunction): void {
    next(createError(500, "Internal Server Error Example"));
  }
}
