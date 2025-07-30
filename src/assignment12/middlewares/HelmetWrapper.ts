import { RequestHandler } from 'express';
import helmet from 'helmet';

export class HelmetWrapper {
    public static apply() : RequestHandler {
        return helmet();
    }
}