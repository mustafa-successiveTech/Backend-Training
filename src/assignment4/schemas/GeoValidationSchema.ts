import Joi from 'joi';

const GeoValidator = Joi.object({
    latitude : Joi.number().min(-90).max(90).required,
    longitude : Joi.number().min(-90).max(90).required,
});

export default GeoValidator;
