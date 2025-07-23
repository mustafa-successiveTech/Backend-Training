import Joi from 'joi';

export const validationConfig: Record<string, Joi.ObjectSchema> = {
    
  '/assignment4/users': Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
  }),
  
  '/assignment4/geo-validator': Joi.object({
    latitude: Joi.number().min(-90).max(90).required(),
    longitude: Joi.number().min(-180).max(180).required(),
  }),
};
