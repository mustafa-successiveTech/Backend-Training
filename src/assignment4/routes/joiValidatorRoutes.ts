import joiValidatorMiddleware from "../middlewares/joiValidatorMiddleware";
import express from "express";
import queryValidatorMiddleware from "../middlewares/queryValidator";
import GeoValidatorMiddleware from "../middlewares/GeoValidatorMiddleware";
import { dynamicValidationMiddleware } from "../middlewares/dynamicValidationMiddleware";

const router = express.Router();

console.log("Before, joi-validator");
router.post("/userValidator", joiValidatorMiddleware);
router.post('/query-validator', queryValidatorMiddleware);
router.post('/geo-validator', GeoValidatorMiddleware);
console.log("after, joi-validator");

router.post('/users', dynamicValidationMiddleware, (req, res) => {
  res.json({ message: 'User data is valid', data: req.body });
});

router.post('/geo-validator', dynamicValidationMiddleware, (req, res) => {
  res.json({ message: 'Geo data is valid', data: req.body });
});

export default router;


