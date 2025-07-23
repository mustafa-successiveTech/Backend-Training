export class HealthController {
  public checkHealth(req: any, res: any) {
    res.status(200).json({
      status: "UP",                   
      timestamp: new Date(),        
      uptime: process.uptime(),      
    });
  }
}
