import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { cart } from './shared/models/cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   totalcart=0;
  constructor(public Cartserv:CartService){
    const cartob=Cartserv.getCartObservable();
    cartob.subscribe((obser)=>{
       this.totalcart=obser.totalCount;
    })
  }

}
