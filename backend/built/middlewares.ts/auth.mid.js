"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var http_status_1 = require("../constants/http_status");
exports.default = (function (req, res, next) {
    var token = req.headers.access_token;
    if (!token)
        return res.status(http_status_1.HTTP_UNAUTHORIZED).send();
    console.log(token);
    try {
        var decodedUser = (0, jsonwebtoken_1.verify)(token, "SomeRandomText");
        req.user = decodedUser;
    }
    catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(http_status_1.HTTP_UNAUTHORIZED).send('Token expired');
        }
        else if (error.name === 'JsonWebTokenError') {
            return res.status(http_status_1.HTTP_UNAUTHORIZED).send('Invalid token');
        }
        else {
            return res.status(http_status_1.HTTP_UNAUTHORIZED).send('Token verification failed');
        }
    }
    return next();
});
