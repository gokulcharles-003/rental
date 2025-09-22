import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pipe } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
@Component({
  selector: 'app-tenant-component',
  imports: [FormsModule, CurrencyPipe, DatePipe, CommonModule],
  templateUrl: './tenant-component.html',
  styleUrl: './tenant-component.css'
})
export class TenantComponent {
   properties = [
    { name: 'Green Villa', address: '123 Street', rentAmount: 12000, availabilityStatus: 'Available' },
    { name: 'City Apartment', address: '456 Avenue', rentAmount: 15000, availabilityStatus: 'Available' }
  ];
 
  leaseApplications = [
    { propertyName: 'Green Villa', status: 'Pending' }
  ];
 
  payments = [
    { amount: 12000, propertyName: 'Green Villa', status: 'Paid', date: 'Sep 20, 2025' },
    { amount: 15000, propertyName: 'City Apartment', status: 'Pending', date: 'Sep 22, 2025' }
  ];
 
  maintenanceRequests: string[] = [];
  newRequest: string = '';
 
  applyForLease(property: any) {
    this.leaseApplications.push({ propertyName: property.name, status: 'Pending' });
  }
 
  raiseRequest() {
    if (this.newRequest.trim()) {
      this.maintenanceRequests.push(this.newRequest);
      this.newRequest = '';
    }
  }
}
