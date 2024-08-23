import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { cart } from '../../shared/models/cart';
import { UserService } from '../../../services/user.service';
import { User } from '../../shared/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   totalcart=0;
   user!:User;
  constructor(public Cartserv:CartService , private userservice:UserService){
    const cartob=Cartserv.getCartObservable();
    cartob.subscribe((obser)=>{
       this.totalcart=obser.totalCount;
   
      })
      userservice.userObservable.subscribe((newUser)=>{
        this.user=newUser;
        
      })
    }
    logout(){
      this.userservice.logout();
    }


}
