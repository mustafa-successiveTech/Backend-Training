"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.use(express_1.default.json());
console.log("Error Routes");
// app.use('/async-route', asyncErrorRoute);
console.log('Async');
// app.use("/error-route", errorRoutes);
router.use("/router", router);
// app.use((req: Request, res: Response, next: NextFunction) => {
//   next(createError(404, "Not Found"));
// });
exports.default = router;
