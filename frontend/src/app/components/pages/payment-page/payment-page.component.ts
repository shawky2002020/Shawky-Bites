import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../shared/models/order';
import { trigger, transition, style, animate, group } from '@angular/animations';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css'],
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
export class PaymentPageComponent implements OnInit {

  order:Order = new Order();
  constructor(orderService: OrderService, router: Router) {
      orderService.getNewOrderForCurrentUser().subscribe({
        next: (order) => {
          this.order = order;
        },
        error:() => {
          router.navigateByUrl('/chekcout');
        }
      })

   }

  ngOnInit(): void {
  }

}