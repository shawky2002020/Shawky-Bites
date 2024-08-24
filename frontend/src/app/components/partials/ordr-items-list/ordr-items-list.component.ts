import { Component, Input } from '@angular/core';
import { Order } from '../../shared/models/order';

@Component({
  selector: 'order-items-list',
  templateUrl: './ordr-items-list.component.html',
  styleUrl: './ordr-items-list.component.css'
})
export class OrdrItemsListComponent {
  @Input()
  Order!:Order;



}
