import express from 'express';
import { validationController } from '../controller/ValidationController';

const router = express.Router();

const objValidation = new validationController();

router.get('/validate/:id', objValidation.validateIdAndName.bind(objValidation));
// Using bind here because it's an async function that needs to be called with the 'this' context set to the controller that will only called when routes hit
// If call will be used here it will not wait for the route to get hit but instead call the function immediately and later when get called it will be undefined

export default router;