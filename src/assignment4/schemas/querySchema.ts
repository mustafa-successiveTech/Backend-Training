import Joi, { object } from "joi";

const queryValidator = Joi.object({
    query : Joi.number().min(1).required
});

export default queryValidator;