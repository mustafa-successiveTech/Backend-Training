import { IHealthService } from "../interface/IHealthService";

export class HealthService implements IHealthService {
  checkHealth() {
    return {
      status: "UP",
      message: "Service is healthy"
    };
  }
}
