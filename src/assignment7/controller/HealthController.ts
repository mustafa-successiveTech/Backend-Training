import { IHealthController } from "../interfaces/IHealthInterface";

export class HealthController implements IHealthController {
  public checkHealth(req: any, res: any) {
    res.status(200).json({
      status: "UP",                   
      timestamp: new Date(),        
      uptime: process.uptime(),      
    });
  }
}
