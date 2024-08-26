"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sample_users = exports.sample_tags = exports.sample_food = void 0;
exports.sample_food = [
    {
        "_id": "66cb3e175e882ff11e1b9d1c",
        "name": "Pizza Pepperoni",
        "price": 10,
        "tags": ["FastFood", "Pizza", "Lunch"],
        "favorite": false,
        "stars": 4.5,
        "imageUrl": "assets/food-1.jpg",
        "origins": ["italy"],
        "cookTime": "10-20"
    },
    {
        "_id": "66cb3e175e882ff11e1b9d1e",
        "name": "Hamburger",
        "price": 5,
        "tags": ["FastFood"],
        "favorite": false,
        "stars": 3.5,
        "imageUrl": "assets/food-3.jpg",
        "origins": ["germany", "us"],
        "cookTime": "10-15"
    },
    {
        "_id": "66cb3e175e882ff11e1b9d1d",
        "name": "Meatball",
        "price": 20,
        "tags": ["SlowFood", "Lunch"],
        "favorite": true,
        "stars": 4.7,
        "imageUrl": "assets/food-2.jpg",
        "origins": ["persia", "china"],
        "cookTime": "20-30"
    },
    {
        "_id": "66cb3e175e882ff11e1b9d21",
        "name": "Vegetables Pizza",
        "price": 9,
        "tags": ["FastFood", "Pizza", "Lunch"],
        "favorite": false,
        "stars": 4.0,
        "imageUrl": "assets/food-6.jpg",
        "origins": ["italy"],
        "cookTime": "40-50"
    },
    {
        "_id": "66cb3e175e882ff11e1b9d22",
        "name": "Spaghetti Carbonara",
        "price": 15,
        "tags": ["Lunch"],
        "favorite": true,
        "stars": 4.6,
        "imageUrl": "assets/Spaghetti Carbonara.jpeg",
        "origins": ["italy"],
        "cookTime": "20-25"
    },
    {
        "_id": "66cb3e175e882ff11e1b9d23",
        "name": "Sushi Rolls",
        "price": 18,
        "tags": ["Seafood", "Dinner"],
        "favorite": true,
        "stars": 4.8,
        "imageUrl": "assets/Sushi Rolls.jpeg",
        "origins": ["japan"],
        "cookTime": "30-40"
    },
    {
        "_id": "66cb3e175e882ff11e1b9d24",
        "name": "Chicken Tikka",
        "price": 12,
        "tags": ["Dinner"],
        "favorite": false,
        "stars": 4.3,
        "imageUrl": "assets/Chicken Tikka.jpeg",
        "origins": ["india"],
        "cookTime": "30-40"
    },
    {
        "_id": "66cb3e175e882ff11e1b9d1f",
        "name": "Fried Potatoes",
        "price": 2,
        "tags": ["FastFood", "Fry"],
        "favorite": true,
        "stars": 3.3,
        "imageUrl": "assets/food-4.jpg",
        "origins": ["belgium", "france"],
        "cookTime": "15-20"
    },
    {
        "_id": "66cb3e175e882ff11e1b9d20",
        "name": "Chicken Soup",
        "price": 11,
        "tags": ["SlowFood"],
        "favorite": false,
        "stars": 3.0,
        "imageUrl": "assets/food-5.jpg",
        "origins": ["india", "asia"],
        "cookTime": "40-50"
    },
    {
        "_id": "66cb3e175e882ff11e1b9d28",
        "name": "Beef Stroganoff",
        "price": 16,
        "tags": ["Dinner"],
        "favorite": false,
        "stars": 4.2,
        "imageUrl": "assets/Beef Stroganoff.jpeg",
        "origins": ["russia"],
        "cookTime": "30-40"
    },
    {
        "_id": "66cb3e175e882ff11e1b9d2b",
        "name": "Paella",
        "price": 22,
        "tags": ["Seafood", "Dinner"],
        "favorite": false,
        "stars": 4.4,
        "imageUrl": "assets/Paella.jpeg",
        "origins": ["spain"],
        "cookTime": "50-60"
    }
];
exports.sample_tags = [
    { name: 'All', count: 6 },
    { name: 'FastFood', count: 4 },
    { name: 'Pizza', count: 2 },
    { name: 'Lunch', count: 3 },
    { name: 'SlowFood', count: 2 },
    { name: 'Hamburger', count: 1 },
    { name: 'Fry', count: 1 },
    { name: 'Soup', count: 1 },
];
exports.sample_users = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@gmail.com',
        password: '12345',
        address: 'Toronto On',
        isAdmin: true,
    },
    {
        id: '2',
        name: 'Jane Doe',
        email: 'Jane@gmail.com',
        password: 'janesteel10.',
        address: 'Shanghai',
        isAdmin: false,
    },
    {
        id: '3',
        name: 'Hanan maged',
        email: 'Hanan@gmail.com',
        password: 'hanansteel10.',
        address: 'Shanghai',
        isAdmin: false,
    },
];
