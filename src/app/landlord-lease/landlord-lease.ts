import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-landlord-lease',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './landlord-lease.html',
  styleUrls: ['./landlord-lease.css']
})
export class LandlordLeaseComponent {
  showLeaseModal = true; 

  properties = [
    { id: 'p1', label: '123 Maple Street' },
    { id: 'p2', label: '45 Oak Avenue, Apt 3B' }
  ];

  tenants = [
    { id: 't1', name: 'Alice Johnson' },
    { id: 't2', name: 'David Lee' }
  ];

  lease = {
    propertyId: '',
    tenantId: '',
    startDate: '',
    endDate: '',
    monthlyRent: null,
    securityDeposit: null,
    terms: '',
    status: 'DRAFT'
  };

  closeLeaseModal() {
    this.showLeaseModal = false;
  }

  sendLease() {
    if (
      !this.lease.propertyId ||
      !this.lease.tenantId ||
      !this.lease.startDate ||
      !this.lease.endDate ||
      this.lease.monthlyRent == null ||
      this.lease.monthlyRent <= 0 ||
      !this.lease.terms?.trim()
    ) {
      alert('Please fill all required fields before sending to tenant.');
      return;
    }
    this.lease.status = 'SENT';
    alert('Lease sent to tenant!');
    this.closeLeaseModal();
  }
}