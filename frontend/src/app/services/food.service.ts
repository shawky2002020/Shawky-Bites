import { Injectable } from '@angular/core';
import { sample_food, sample_tags } from '../../data';
import { Food } from '../components/shared/models/food';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';
import { FOOD_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL } from '../components/shared/constants/urls';
import { tag } from '../components/shared/models/tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private http:HttpClient){}
  getAll():Observable<Food[]>{
    return this.http.get <Food[]> (FOODS_URL);
  }

  getAllFoodBySearch(searchTerm:string){
   return this.http.get <Food[]> (FOODS_BY_SEARCH_URL+searchTerm)
  }

  getAllTags():Observable<tag[]>{
    return this.http.get <tag[]> (FOODS_TAGS_URL)
  }  
  getAllFoodbyTags(tag:string):Observable<Food[]>{
    return tag==="All"? this.getAll() :
     this.http.get<Food[]> (FOODS_BY_TAG_URL+tag);
  }   
  
  getFoodById(id:string):Observable<Food>{
    console.log(FOOD_BY_ID_URL+id);

    return this.http.get<Food>(FOOD_BY_ID_URL+id);
    
  }

}
