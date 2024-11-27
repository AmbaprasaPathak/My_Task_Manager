// src/app/components/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  username: string = 'JohnDoe'; // Replace with actual username logic

  constructor(private router: Router) {}

  editProfile() {
    this.router.navigate(['/profile']);
  }

  logout() {
    // Implement logout logic here (e.g., clear user session)
    this.router.navigate(['/signup']);
  }
}