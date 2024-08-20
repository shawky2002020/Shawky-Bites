import { Component } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../partials/header/shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods:Food[]=[];
  constructor(foodservice:FoodService, activateroute:ActivatedRoute){
    activateroute.params.subscribe((param)=>{
      if(param.searchterm)
        this.foods = foodservice.getAllFoodBySearch(param.searchterm);
      else if (param.tag) {
        this.foods=foodservice.getAllFoodbyTags(param.tag);
      }
      else
        this.foods= foodservice.getAll();
    })
  }
}
