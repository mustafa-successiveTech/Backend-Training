import rateLimit from "express-rate-limit";

export class RateLimit {
    public static apply() {
        return rateLimit({
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 100, // limit each IP to 100 requests per `window` (her
            message : "Limit excedeed"
        })
    }
}; 