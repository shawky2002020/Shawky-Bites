import { Router } from "express";
import { sample_food, sample_tags } from "../data";
import asyncHandler from "express-async-handler";
import { FoodModel } from "../models/food.model";
const router = Router();

router.get('/',asyncHandler(
  async (req,res)=>{
    const foods = await FoodModel.find();
    res.send(foods)
  }
))
router.get('/seed',asyncHandler(
  async (req,res)=>{
    const foodCount = await FoodModel.countDocuments();
    if(foodCount)
    { 
      console.log("DB is already seeded 😇");
      return;
    }
    await FoodModel.create(sample_food);
    res.send('Seed is Done');
  }
))
router.get('/search/:searchterm',asyncHandler(
  async (req,res)=>{
    const searchRegex = new RegExp(req.params.searchterm,'i');

  let foods = await FoodModel.find({name:{$regex:searchRegex}});
  res.send(foods);
}))

//All tags
router.get('/tags',asyncHandler(
  async(req,res)=>{
    const tags = await FoodModel.aggregate([
      {
        $unwind:'$tags'
      },
      {
        $group:{
          _id:'$tags',
          count:{$sum:1}
        }
      },
      {
        $project:{
          _id:0,
          name:'$_id',
          count:'$count'
        }
      },

    ]).sort({count:-1});
    const all={
      name:'All',
      count: await FoodModel.countDocuments()
    }
     tags.unshift(all);
    
    res.send(tags);
  
}))


//Get by tag
router.get('/tag/:tag',asyncHandler(
  async(req,res)=>{
    let tagterm=req.params.tag;
  const foods = await FoodModel.find({tags:tagterm})
  res.send(foods);
  
}))
router.get('/:id',asyncHandler(
  async(req,res)=>{
  let id = req.params.id;
  let foods =await FoodModel.findById(id);
  res.send(foods);
}))
export default router;