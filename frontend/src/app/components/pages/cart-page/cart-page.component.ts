import { Component, OnInit } from '@angular/core';
import { cartitem } from '../../shared/models/Cartsitem';
import { CartService } from '../../../services/cart.service';
import { cart } from '../../shared/models/cart';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
  animations: [
    trigger('bounceIn', [
      transition(':enter', [
        style({ transform: 'translateY(-100px)', opacity: 0 }),
        animate('700ms cubic-bezier(.68,-0.55,.27,1.55)', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
    ]),
  ],
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