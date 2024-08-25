import { Component } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [ // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate('1500ms ease-out', style({ opacity: 1 })),
      ])
    ]),
    trigger('flipIn', [
      transition(':enter', [
        style({ transform: 'rotateY(90deg)', opacity: 0 }),
        animate('800ms ease-out', style({ transform: 'rotateY(0)', opacity: 1 })),
      ]),
    ]),
  
  ]
  
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
