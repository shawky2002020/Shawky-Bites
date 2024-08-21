import { Component } from '@angular/core';
import { Food } from '../../../components/partials/header/shared/models/food';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
  food!:Food;
  constructor(activateRouter:ActivatedRoute,foodservice:FoodService,private cartService:CartService,private router:Router){
    activateRouter.params.subscribe(param=>{
      if(param.id){
        this.food=foodservice.getFoodById(param.id);
      }
      
    })
  }
  addtocart(){
    this.cartService.addCart(this.food);
    this.router.navigateByUrl('/cart-page')

  }
}
