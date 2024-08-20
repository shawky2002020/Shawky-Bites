import { Component, OnInit } from '@angular/core';
import { tag } from '../header/shared/models/tags';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?:tag[];
  constructor(foodService:FoodService) {
    this.tags=foodService.getAllTags();
   }

  ngOnInit(): void {
  }

}