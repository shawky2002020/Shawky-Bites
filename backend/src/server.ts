import express from 'express'
import cors from 'cors'


import { sample_food, sample_tags } from './data';

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get('/api/foods',(req,res)=>{
  res.send(sample_food);
  
})
app.get('/api/foods/search/:searchterm',(req,res)=>{
  
  let searchterm=req.params.searchterm;
  let foods = sample_food.filter(food=>food.name.toLowerCase().includes(searchterm.toLowerCase()) );
  res.send(foods);
})
app.get('/api/foods/tags',(req,res)=>{
  res.send(sample_tags);
  
})

app.get('/api/foods/tag/:tag',(req,res)=>{
  let tagterm=req.params.tag;
  let food = tagterm==='All'? sample_food : sample_food.filter(food=>food.tags?.includes(tagterm));
  res.send(food);
  

  
  res.send(food);
})
app.get('/api/foods/:id',(req,res)=>{
  let id = req.params.id;
  let food = sample_food.find(food=>food.id===id);
  res.send(food);
})


const port = 5000;
app.listen(port,()=>{
  console.log('Website served on port ',port);
  
})
