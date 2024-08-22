import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-container',
  templateUrl: './input-container.component.html',
  styleUrl: './input-container.component.css'
})
export class InputContainerComponent {

  @Input()
  label!:string;
  @Input()
  bgcolor='white';
}
