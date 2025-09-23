import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-owner-login',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './owner-login.html',
  styleUrl: './owner-login.css'
})
export class OwnerLogin {
  email: string = '';
  password: string = '';
  showErrors = false;

  constructor(private router: Router) {}

  isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  onLogin() {
    this.showErrors = true;
    if (!this.email || !this.isValidEmail(this.email) || !this.password) {
      alert('Please fill in all fields correctly');
      return;
    }
    alert('Owner Login Successfully!');
    this.router.navigate(['/owner']);
  }
}