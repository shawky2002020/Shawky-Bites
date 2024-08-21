import { Component } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods:Food[]=[];
  constructor(private servicefood:FoodService, activateroute:ActivatedRoute){
    let foodObservable!:Observable<Food[]>;

    activateroute.params.subscribe((param)=>{
      if(param.searchterm)
        foodObservable = servicefood.getAllFoodBySearch(param.searchterm);
      else if (param.tag) {
        foodObservable=this.servicefood.getAllFoodbyTags(param.tag);
      }
      else
      foodObservable= servicefood.getAll();

      foodObservable.subscribe(observ=>this.foods=observ);

    })
  }
}
