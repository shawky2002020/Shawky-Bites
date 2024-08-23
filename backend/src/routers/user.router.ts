import { Router } from "express";
import { sample_food, sample_users } from "../data";
import asyncHandler from "express-async-handler";
import jwt from 'jsonwebtoken'
import { FoodModel } from "../models/food.model";
import { UserModel } from "../models/user.model";

const router=Router();
router.post('/login',asyncHandler(
  async(req,res)=>{

  const{email,password}=  req.body;
  const user = await UserModel.findOne(
    {email,password}
  )
  
  
  if(user){
    
    res.send(GenerateTokenResponse(user))
    console.log(user.name);
    
  }
  else{
    res.status(404).send('User name or Password not valid');
  }
}))
router.get('/seed',asyncHandler(
  async (req,res)=>{
    const Usercount = await UserModel.countDocuments();
    if(Usercount)
    { 
      console.log("DB is already seeded 😇");
      res.send('😎');
      return;
    }
    await UserModel.create(sample_users);
    res.send('Seed is Done');
  }))
const GenerateTokenResponse = (user:any)=>{
  const token =jwt.sign({
    email:user.email,
    isAdmin:user.isAdmin
  },'SomeRandomText',{
    expiresIn:'30d'
  })
  
  return {
    id: user.id,
    email: user.email,
    password:user.password,
    name: user.name,
    address: user.address,
    isAdmin: user.isAdmin,
    token: token
  };

}
export default router;