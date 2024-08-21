import { Injectable } from '@angular/core';
import { cart } from '../components/partials/header/shared/models/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../components/partials/header/shared/models/food';
import { cartitem } from '../components/partials/header/shared/models/Cartsitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private cart:cart = this.GetCartFromLocalStorage();
  private cartSubject: BehaviorSubject<cart> = new BehaviorSubject(this.cart);

  addCart(food:Food){
    let Cartitem = this.cart.items.find(item=>item.food.id===food.id)
    if(Cartitem)
      return;
    this.cart.items.push(new cartitem(food));
    this.SetCartToLocalstorage();
  }

  removeFromCart(foodid:string):void{
    this.cart.items= this.cart.items.filter(item=>item.food.id!=foodid);
    
    this.SetCartToLocalstorage();

  }

  changeQuantity(foodid:string,quantity:number){
    let cartitem = this.cart.items.find(item=>item.food.id===foodid);
    if(cartitem){
      cartitem.quantity=quantity;
      cartitem.price=cartitem.quantity*cartitem.food.price;
    }
    else
      return;
    this.SetCartToLocalstorage();
  }

  clearCart(){
    this.cart=new cart();
    this.SetCartToLocalstorage();
  }

  getCartObservable():Observable<cart>{
    return this.cartSubject.asObservable();
  }

  private SetCartToLocalstorage():void{
    this.cart.totalPrice=this.cart.items.reduce((prev,current)=>prev+current.price,0);
    this.cart.totalCount=this.cart.items.reduce((prev,curr)=>prev+curr.quantity,0);
    const cartjson = JSON.stringify(this.cart);
    localStorage.setItem('Cart',cartjson);
    this.cartSubject.next(this.cart);
  }

  private GetCartFromLocalStorage():cart{
    if (typeof window !== 'undefined' && localStorage.getItem('Cart')) {
      const cartJson = localStorage.getItem('Cart');
      return cartJson ? JSON.parse(cartJson) : new cart();
    }
    return new cart();
  }

}
