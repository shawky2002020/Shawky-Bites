import { verify } from "jsonwebtoken";
import { HTTP_UNAUTHORIZED } from "../constants/http_status";


export default (req: any, res: any, next: any) => {
    
    const token = req.headers.access_token as string;
    if(!token) return res.status(HTTP_UNAUTHORIZED).send();
    console.log(token);
    

    try {
        const decodedUser = verify(token, "SomeRandomText");
        req.user = decodedUser;

    } catch (error:any) {
        if (error.name === 'TokenExpiredError') {
            return res.status(HTTP_UNAUTHORIZED).send('Token expired');
          } else if (error.name === 'JsonWebTokenError') {
            return res.status(HTTP_UNAUTHORIZED).send('Invalid token');
          } else {
            return res.status(HTTP_UNAUTHORIZED).send('Token verification failed');
          }
    }

    return next();
}