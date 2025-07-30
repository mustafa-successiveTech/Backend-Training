import { Request, Response, NextFunction } from "express";

export interface IStatusController {
  ok(req: Request, res: Response): void;
  create(req: Request, res: Response): void;
  delete(req: Request, res: Response): void;
  redirectPermanent(req: Request, res: Response): void;
  redirectTemporary(req: Request, res: Response): void;
  methodNotAllowed(req: Request, res: Response, next: NextFunction): void;
  internalError(req: Request, res: Response, next: NextFunction): void;
}
