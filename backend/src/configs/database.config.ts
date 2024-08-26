import { connect,ConnectOptions } from "mongoose";
export const dbConnect =()=>{
  connect(process.env.MONGO_URL!,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  }as ConnectOptions).then(
    ()=>console.log('Connected🐸')
  ).catch(
    (err)=>console.log(err)
  );
}