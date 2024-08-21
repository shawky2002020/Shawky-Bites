import { Food } from "./food";

export class cartitem{
  constructor(public food:Food){}
  quantity:number=1;
  price:number=this.food.price;
}