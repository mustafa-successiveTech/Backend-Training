import jwt from 'jsonwebtoken';

const secret = process.env.SECRET || "MUSTAFA";

export const generateToken = (id : String, role: String) => {
    return jwt.sign({id, role}, secret, {expiresIn: '1h'});
}

export const verifyToken = (token : string) => {
    return jwt.verify(token, secret);
}