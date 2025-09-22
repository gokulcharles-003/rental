import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-tenant-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './tenant-login.html',
  styleUrl: './tenant-login.css'
})
export class TenantLogin {
  constructor(private router: Router) {}
  email: string = '';
  password: string = '';
 
  onLogin() {
    if(!this.email || !this.password) {
      alert('Please fill in all fields');
    } else {
      //console.log('Owner Login:', this.email, this.password);
      alert('Tenant Login Successfully!');
        this.router.navigate(['/home']);
    }
  }
}
