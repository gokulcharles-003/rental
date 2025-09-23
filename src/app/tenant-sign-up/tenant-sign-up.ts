import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-tenant-sign-up',
  imports: [FormsModule, RouterLink,CommonModule],
  templateUrl: './tenant-sign-up.html',
  styleUrl: './tenant-sign-up.css'
})
export class TenantSignUp {
  name = '';
  email = '';
  password = '';
  mobile = '';
  showErrors = false;

  constructor(private router: Router) {}

  isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  onSignup() {
    this.showErrors = true;
    if (
      !this.name ||
      !this.email ||
      !this.isValidEmail(this.email) ||
      !this.mobile ||
      this.mobile.length !== 10 ||
      !this.password
    ) {
      alert('Please fill in all fields correctly');
      return;
    }
    alert('Tenant Signup Successfully!');
    this.router.navigate(['/tenant/login']);
  }

}