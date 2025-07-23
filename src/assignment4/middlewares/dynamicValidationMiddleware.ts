import { Request, Response, NextFunction } from 'express';
import { validationConfig } from '../schemas/ValidationConfig'

export function dynamicValidationMiddleware(req: Request, res: Response, next: NextFunction) {
  const schema = validationConfig[req.route.path];

  if (!schema) {
    return next(); 
  }

  const { error, value } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({ errors: error.details.map(detail => detail.message) });
  }

  req.body = value; 
  next();
}
