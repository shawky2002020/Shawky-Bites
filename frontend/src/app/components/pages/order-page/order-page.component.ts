import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../shared/models/order';
import { trigger, transition, style, animate, group } from '@angular/animations';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css'],
  animations: [
    trigger('fadeInAndScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        group([
          animate('500ms', style({ opacity: 1 })),
          animate('800ms 500ms', style({ transform: 'scale(1)' })) // Delayed scale animation
        ])
      ])
    ])
  ]
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