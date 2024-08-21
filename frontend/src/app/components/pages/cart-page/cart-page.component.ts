import { Component, OnInit } from '@angular/core';
import { cartitem } from '../../partials/header/shared/models/Cartsitem';
import { CartService } from '../../../services/cart.service';
import { cart } from '../../partials/header/shared/models/cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
   }

  ngOnInit(): void {
  }

  removeFromCart(cartItem:cartitem){
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem:cartitem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }

}