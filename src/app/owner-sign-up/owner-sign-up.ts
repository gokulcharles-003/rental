import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-owner-sign-up',
  imports: [FormsModule, RouterLink],
  templateUrl: './owner-sign-up.html',
  styleUrl: './owner-sign-up.css'
})
export class OwnerSignUp {
  constructor(private router: Router) {}
  name: string = '';
  email: string = '';
  password: string = '';

   onSignup() {
    if(!this.name || !this.email || !this.password) {
      alert('Please fill in all fields');
    } 
    else {
      alert('Owner Login Successfully!');
       this.router.navigate(['/owner/login']);
    }
  }
}
