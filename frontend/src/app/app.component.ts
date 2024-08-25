import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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
