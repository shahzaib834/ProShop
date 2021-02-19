import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const generateWebToken = (id) => {
    const secretKey = process.env.JWT_SECRET;
    return jwt.sign({id} , secretKey , {
        expiresIn : '30d'
    })

    
}

export default generateWebToken;