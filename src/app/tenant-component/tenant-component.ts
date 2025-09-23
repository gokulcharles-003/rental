import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-tenant-component',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './tenant-component.html',
  styleUrl: './tenant-component.css'
})
export class TenantComponent {
   properties = [
    { name: 'Green Villa', address: '123 Street', rentAmount: 12000, availabilityStatus: 'Available', image: 'https://tse1.mm.bing.net/th/id/OIP.QenW_XHNSg63LPNpZRbzEwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3'},
    { name: 'City Apartment', address: '456 Avenue', rentAmount: 15000, availabilityStatus: 'Available', image: 'https://tse4.mm.bing.net/th/id/OIP.Fun3wrXk25N4JxXl5Kl2LgHaFD?rs=1&pid=ImgDetMain&o=7&rm=3'},
    { name: 'Akhil Apartment', address: '45 Wakad', rentAmount: 9000, availabilityStatus: 'Leased', image: 'https://eycrk5cno2n.exactdn.com/wp-content/uploads/2022/02/The-Importance-of-High-Quality-Real-Estate-Photos-v3.jpg'}
  ];
 
  leaseApplications = [
    { propertyName: '123 Malpe Street', status: 'Pending' }
  ];
 
  payments = [
    { amount: 12000, propertyName: 'Green Villa', status: 'Paid', date: 'Sep 20, 2025' },
    { amount: 15000, propertyName: 'City Apartment', status: 'Pending', date: 'Sep 22, 2025' }
  ];
 
  maintenanceRequests: string[] = [];
  newRequest: string = '';
 
  applyForLease(property: any) {
    alert(`Applied for lease at ${property.name}`);
    this.leaseApplications.push({ propertyName: property.name, status: 'Pending' });
  }
 
  raiseRequest() {
    if (this.newRequest.trim()) {
      this.maintenanceRequests.push(this.newRequest);
      this.newRequest = '';
    }
  }
}
