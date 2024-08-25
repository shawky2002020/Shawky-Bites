import express from 'express'
import { dbConnect } from './src/configs/database.config';
import cors from 'cors'
import foodRouter from './src/routers/food.router'
import userRouter from './src/routers/user.router';
import orderRouter from './src/routers/order.router';
import path from 'path';



dbConnect();


const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'index.html'))
})

const port =process.env.PORT ||5000;
app.listen(port,()=>{
  console.log('Website served on port ',port);
  
})
