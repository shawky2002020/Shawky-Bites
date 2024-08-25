import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../shared/models/order';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  order!:Order;
  constructor(activatedRoute: ActivatedRoute,
              orderService:OrderService) {
     const params = activatedRoute.snapshot.params;
     if(!params.orderId) return;

     orderService.trackOrderById(params.orderId).subscribe(order => {
       this.order = order;
     })

  }

  ngOnInit(): void {
  }

}