import { Request, Response } from "express";

export interface IHealthController {
  checkHealth(req: Request, res: Response): void;
}
