import { Injectable } from '@angular/core';
import { sample_food, sample_tags } from '../../data';
import { Food } from '../components/partials/header/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(){}
  getAll():Food[]{
    return sample_food;
  }

  getAllFoodBySearch(search:string){
    return this.getAll().filter(food=>food.name.toLowerCase().includes(search.toLowerCase()) )
  }

  getAllTags(){
    return sample_tags;
  }
  getAllFoodbyTags(tag:string):Food[]{
    return tag=='All'?
    this.getAll()
    : this.getAll().filter(food=>food.tags?.includes(tag));    
  }
  getFoodById(id:string):Food{
    return this.getAll().find(food=>food.id===id) || new Food()
  }

}
