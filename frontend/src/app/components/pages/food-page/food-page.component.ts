import { Component } from '@angular/core';
import { Food } from '../../shared/models/food';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CartService } from '../../../services/cart.service';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css',
  animations: [
    trigger('zoomIn', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'scale(1)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class FoodPageComponent {
  food!:Food;
  constructor(activateRouter:ActivatedRoute, foodservice:FoodService,private cartService:CartService,private router:Router){
    activateRouter.params.subscribe(param=>{
      console.log('hello from food page');
      
      if(param.id){
        foodservice.getFoodById(param.id).subscribe(obs=>{
          this.food=obs;
          console.log(this.food.imageUrl);
          
          
        });
      }
      
    })
  }
  addtocart(){
    this.cartService.addCart(this.food);
    this.router.navigateByUrl('/cart-page')

  }
}
