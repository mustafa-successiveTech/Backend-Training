import express from 'express';
import asyncErrorRoute from './asyncErrorRoute';
import errorRoutes from './errorRoutes';
import validateRoute from './validateRoute';

const router = express.Router();

router.get('/async-route', asyncErrorRoute);

router.get('/error-route', errorRoutes);

router.get('/validate-route', validateRoute);

export default router;