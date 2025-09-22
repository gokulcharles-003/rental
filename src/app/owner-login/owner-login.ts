import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-owner-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './owner-login.html',
  styleUrl: './owner-login.css'
})
export class OwnerLogin {
  constructor(private router: Router) {}
    email: string = '';
    password: string = '';
   
    onLogin() {
      if(!this.email || !this.password) {
        alert('Please fill in all fields');
      } else {
        //console.log('Owner Login:', this.email, this.password);
        alert('Owner Login Successfully!');
         this.router.navigate(['/home']);
      }
    }
}
