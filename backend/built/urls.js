"use strict";
// import { environment } from "src/environments/environment";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORDER_TRACK_URL = exports.ORDER_PAY_URL = exports.ORDER_NEW_FOR_CURRENT_USER_URL = exports.ORDER_CREATE_URL = exports.ORDERS_URL = exports.USER_REGISTER_URL = exports.USER_LOGIN_URL = exports.FOOD_BY_ID_URL = exports.FOODS_BY_TAG_URL = exports.FOODS_BY_SEARCH_URL = exports.FOODS_TAGS_URL = exports.FOODS_URL = void 0;
var BASE_URL = 'http://localhost:5000';
exports.FOODS_URL = BASE_URL + '/api/foods';
exports.FOODS_TAGS_URL = exports.FOODS_URL + '/tags';
exports.FOODS_BY_SEARCH_URL = exports.FOODS_URL + '/search/';
exports.FOODS_BY_TAG_URL = exports.FOODS_URL + '/tag/';
exports.FOOD_BY_ID_URL = exports.FOODS_URL + '/';
exports.USER_LOGIN_URL = BASE_URL + '/api/users/login';
exports.USER_REGISTER_URL = BASE_URL + '/api/users/register';
exports.ORDERS_URL = BASE_URL + '/api/orders';
exports.ORDER_CREATE_URL = exports.ORDERS_URL + '/create';
exports.ORDER_NEW_FOR_CURRENT_USER_URL = exports.ORDERS_URL + '/newOrderForCurrentUser';
exports.ORDER_PAY_URL = exports.ORDERS_URL + '/pay';
exports.ORDER_TRACK_URL = exports.ORDERS_URL + '/track/';
