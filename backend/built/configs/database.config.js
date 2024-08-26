"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
var mongoose_1 = require("mongoose");
var dbConnect = function () {
    (0, mongoose_1.connect)('mongodb://localhost:27017/Foodmine', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(function () { return console.log('Connected🐸'); }).catch(function (err) { return console.log(err); });
};
exports.dbConnect = dbConnect;
