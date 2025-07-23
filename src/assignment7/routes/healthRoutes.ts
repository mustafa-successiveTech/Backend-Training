import express from 'express';
import { HealthController } from '../controller/HealthController';

export class HealthRoutes {
  public router = express.Router(); 
  private healthController = new HealthController();  

  constructor() {
    this.initializeRoutes(); 
  }

  private initializeRoutes() {
    this.router.get('/health', this.healthController.checkHealth); 
  }
}
