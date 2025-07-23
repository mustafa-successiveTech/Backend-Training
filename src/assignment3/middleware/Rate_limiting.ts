import rateLimit from 'express-rate-limit';

export const Rate_limit = (windowMinutes: number, maxRequests: number) => {
  return rateLimit({
    windowMs: windowMinutes * 60 * 1000,  
    max: maxRequests,
    message: 'Too many requests, please try again later.'
  });
};