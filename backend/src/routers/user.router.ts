import { Router } from "express";
import { sample_food, sample_users } from "../data";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { FoodModel } from "../models/food.model";
import { User, UserModel } from "../models/user.model";
import bcrypt from 'bcryptjs';
let i = 0;
const router = Router();

//login
router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email, password });

    if (user) {
      res.send(GenerateTokenResponse(user));
      console.log(user.name);
    } else {
      res.status(404).send("User name or Password not valid");
    }
  })
);

//seed
router.get(
  "/seed",
  asyncHandler(async (req, res) => {
    const Usercount = await UserModel.countDocuments();
    if (Usercount) {
      console.log("DB is already seeded 😇");
      res.send("😎");
      return;
    }
    await UserModel.create(sample_users);
    res.send("Seed is Done");
  })
);
//register
router.post('/register',asyncHandler(
  async (req,res)=>{
    console.log('req');
    
    const {email,password,name,address} = req.body;
    const user = await UserModel.findOne({email});
    if (user) {
      res.status(400).send('User already registered');
    }
    const encryptPass=await bcrypt.hash(password,10);
    const newUser={
      name,
      email:email.toLowerCase(),
      password:encryptPass,
      address,
      isAdmin:false
    }
    const dbUser = await UserModel.create(newUser);
    res.send(GenerateTokenResponse(dbUser));

  }
))


const GenerateTokenResponse = (user: any) => {
  const token = jwt.sign(
    {
      email: user.email,
      isAdmin: user.isAdmin,
    },
    "SomeRandomText",
    {
      expiresIn: "30d",
    }
  );

  return {
    id: user.id,
    email: user.email,
    password: user.password,
    name: user.name,
    address: user.address,
    isAdmin: user.isAdmin,
    token: token,
  };
};
export default router;
