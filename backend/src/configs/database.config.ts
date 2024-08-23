import { connect,ConnectOptions } from "mongoose";
export const dbConnect =()=>{
  connect('mongodb://localhost:27017/Foodmine',{
    useNewUrlParser:true,
    useUnifiedTopology:true
  }as ConnectOptions).then(
    ()=>console.log('Connected🐸')
  ).catch(
    (err)=>console.log(err)
  );
}