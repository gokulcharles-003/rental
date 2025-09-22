import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-tenant-sign-up',
  imports: [FormsModule, RouterLink,RouterOutlet],
  templateUrl: './tenant-sign-up.html',
  styleUrl: './tenant-sign-up.css'
})
export class TenantSignUp {
  constructor(private router: Router) {}
  name: string = '';
  email: string = '';
  password: string = '';

  onSignup() {
    if(!this.name || !this.email || !this.password) {
      alert('Please fill in all fields');
    } 
    else {
      alert('Tenant Signup Successfully!');
       this.router.navigate(['/tenant/login']);
    }
  }
}
