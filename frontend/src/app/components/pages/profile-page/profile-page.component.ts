import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../shared/user';
import { OrderService } from '../../../services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../shared/models/order';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
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