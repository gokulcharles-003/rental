import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-owner-sign-up',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './owner-sign-up.html',
  styleUrl: './owner-sign-up.css'
})
export class OwnerSignUp {
  constructor(private router: Router) {}
  name: string = '';
  email: string = '';
  password: string = '';
  address: string = '';
  mobile: string = '';
  showErrors = false;

  isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

   onSignup() {
    this.showErrors = true;
    if (
      !this.name ||
      !this.email ||
      !this.isValidEmail(this.email) ||
      !this.password ||
      !this.mobile ||
      this.mobile.length !== 10 ||
      !this.address ||
      this.address.length < 20
    ) {
      alert('Please fill in all fields correctly');
      return;
    }
    alert('Owner Login Successfully!');
    this.router.navigate(['/owner/login']);
  }
}
