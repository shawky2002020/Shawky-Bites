import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [ // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate('600ms ease-out', style({ opacity: 1 })),
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // Check if the page has already been reloaded
    const hasReloaded = sessionStorage.getItem('hasReloaded');

    if (!hasReloaded) {
      // Set the flag so the page doesn't reload again
      sessionStorage.setItem('hasReloaded', 'true');
      // Reload the page
    }
  }
  title = 'Shawky Bites';
  
}
