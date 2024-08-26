import express from 'express'
import { dbConnect } from './configs/database.config';
import cors from 'cors'
import dotenv from 'dotenv'
import foodRouter from './routers/food.router'
import userRouter from './routers/user.router';
import orderRouter from './routers/order.router';
import path from 'path';

dotenv.config();

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

app.use(express.static(path.join(__dirname,'..', '..', 'frontend', 'dist', 'frontend','browser')));

// Send all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'..', '..', 'frontend', 'dist', 'frontend','browser','index.html'));
});

const port =process.env.PORT ||5000;
app.listen(port,()=>{
  console.log('Website served on port ',port);
  
})
