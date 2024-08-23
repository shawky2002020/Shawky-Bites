import express from 'express'
import { dbConnect } from './configs/database.config';
import cors from 'cors'
import foodRouter from './routers/food.router'
import UserRouter from './routers/user.router'

dbConnect();


const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use('/api/foods',foodRouter)

app.use('/api/users',UserRouter);

const port = 5000;
app.listen(port,()=>{
  console.log('Website served on port ',port);
  
})
