import { Component } from '@angular/core';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
    standalone: false
})
export class AuthComponent {
  isSignIn: boolean = true; // Start with Sign In form
  username: string = '';
  email: string = '';
  password: string = '';

  toggleForm() {
    this.isSignIn = !this.isSignIn;
  }

  onSignIn() {
    // Implement sign-in logic here
    console.log('Sign In:', { email: this.email, password: this.password });
  }

  onSignUp() {
    // Implement sign-up logic here
    console.log('Sign Up:', { username: this.username, email: this.email, password: this.password });
  }
}