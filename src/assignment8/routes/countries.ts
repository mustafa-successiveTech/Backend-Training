import express, { Request, Response, NextFunction } from "express";
import Country from "../models/Country";
import { seedCountries } from "../seed/seedCountries";

const router = express.Router();

console.log("Swagger");
/**
 * @swagger
 * /api/countries:
 *  get:
 *      summary: Get all countries
 *      tags: [Countries]
 *      responses:
 *          200:
 *              description: List of countries
 */

console.log("before get");
router.post("/swag", seedCountries);

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const countries = await Country.findById("6881f16ec9a858877df977bc");
    console.log(countries);
    res.json(countries);
  } catch (error) {
    next(error);
  }
});

export default router;
