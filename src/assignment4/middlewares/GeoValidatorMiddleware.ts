import { Request, Response, NextFunction } from "express";
import GeoValidator from "../schemas/GeoValidationSchema";

function GeoValidatorMiddleware(req: Request, res: Response, next: NextFunction) {
  const { error, value } = GeoValidator.validate(req.body);
  console.log("Geo-Validator");

  if (error) {
    console.log("Inside error");
    res.status(400).json({ errors: error.details }); 
  }
  console.log(req.body);
  console.log("Hello");
  
  next();
}

export default GeoValidatorMiddleware;
