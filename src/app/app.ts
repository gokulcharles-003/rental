import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { OwnerComponent } from './owner-component/owner-component';
import { LandlordLeaseComponent } from "./landlord-lease/landlord-lease";
import { TenantLeaseComponent } from "./tenant-lease/tenant-lease";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, OwnerComponent, LandlordLeaseComponent, TenantLeaseComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rental-system');
}
