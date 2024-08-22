import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { sample_food, sample_tags, sample_users } from './data';

const app = express();
app.use(express.json());
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

app.post('/api/users/login',(req,res)=>{
  const{email,password}=req.body;
  
  
  const user = sample_users.find((user)=>{
    console.log(user.email,email);
    console.log(user.password,password);
   return user.email===email && user.password===password
  })
  if(user){
    res.send(GenerateTokenResponse(user))
  }
  else{
    res.status(404).send('User name or Password not valid');
  }
})
const GenerateTokenResponse = (user:any)=>{
  const token =jwt.sign({
    email:user.email,
    isAdmin:user.isAdmin
  },'SomeRandomText',{
    expiresIn:'30d'
  })
  return {
    ...user,
    token: token,
  };
}


const port = 5000;
app.listen(port,()=>{
  console.log('Website served on port ',port);
  
})
