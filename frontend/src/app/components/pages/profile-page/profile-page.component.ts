import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../shared/user';
import { OrderService } from '../../../services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../shared/models/order';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})

export class ProfilePageComponent {
  user!:User;
  order:Order = new Order();
constructor(private userservice:UserService,private orderService:OrderService,activatedRoute:ActivatedRoute){
  this.user=userservice.currentUser;
  orderService.getNewOrderForCurrentUser().subscribe({
    next: (order) => {
      this.order = order;
    }
})}}