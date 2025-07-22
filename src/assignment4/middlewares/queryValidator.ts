import { Request, Response, NextFunction } from "express";
import queryValidator from "../schemas/querySchema";

function queryValidatorMiddleware(req: Request, res: Response, next: NextFunction): Response | void {
  const { error, value } = queryValidator.validate(req.query, { abortEarly: false });

  if (error) {
    return res.status(400).json({ errors: error.details });
  }

  const { page } = value;

  if (typeof page === 'number') {
    return res.json({ message: 'Query is a number', page });
  }

  return res.json({ message: "Query is a string", page });
}

export default queryValidatorMiddleware;
