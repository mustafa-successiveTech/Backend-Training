export interface IHealthService {
  checkHealth(): {
    status: string;
    message: string;
  };
}
