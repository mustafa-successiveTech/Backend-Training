import { Request, Response } from "express";
import { HealthService } from "../services/HealthServices";

export class HealthController {
  private healthService: HealthService;

  constructor() {
    this.healthService = new HealthService();
  }

  check = (req: Request, res: Response) => {
    const result = this.healthService.checkHealth();
    res.status(200).json(result);
  };
}
