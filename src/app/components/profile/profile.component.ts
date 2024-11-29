import { Component } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    standalone: false
})
export class ProfileComponent {
  username: string = 'JohnDoe'; // Replace with actual username logic

  // Add methods to handle form submission and profile updates
}