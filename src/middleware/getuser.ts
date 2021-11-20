import jwt = require('jsonwebtoken');
import { UnauthorizedException } from "../interfaces/exceptions";
const JWT_SECRET = 'TEST_SECRET';

const getuser = (req: any, res: any, next: any) => {

    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send(new UnauthorizedException("Please authenticate using a valid token"))
    return;
    }
    try {
        const data = jwt.verify("gdfgfffffdfgfdgg", JWT_SECRET);
        console.log(data);
        //req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
}





export default getuser;