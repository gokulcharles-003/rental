import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
 
export interface LeaseModel {
  propertyId?: string;
  tenantId?: string;
  startDate?: string;
  endDate?: string;
  monthlyRent?: number | null;
  securityDeposit?: number | null;
  terms?: string;
  status?: 'DRAFT' | 'SENT' | 'ACTIVE' | 'REJECTED';
}
 
@Component({
  selector: 'app-landlord-lease',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './landlord-lease.html',
  styleUrls: ['./landlord-lease.css']
})
export class LandlordLeaseComponent {
  
  properties = [
    { id: 'p1', label: '123 Maple Street' },
    { id: 'p2', label: '45 Oak Avenue, Apt 3B' }
  ];
 
  tenants = [
    { id: 't1', name: 'Alice Johnson' },
    { id: 't2', name: 'David Lee' }
  ];
 
  lease: LeaseModel = {
    propertyId: '',
    tenantId: '',
    startDate: '',
    endDate: '',
    monthlyRent: null,
    securityDeposit: null,
    terms: '',
    status: 'DRAFT'
  };
 
  @Output() sent = new EventEmitter<LeaseModel>();
 
  onSaveDraft(form: NgForm) {
    this.lease.status = 'DRAFT';
    console.log('Draft saved', this.lease);
    alert('Draft saved!');
  }
 
  onSendToTenant(form: NgForm) {
    if (!form.valid) {
      alert('Please fill all required fields before sending to tenant.');
      form.control.markAllAsTouched();
      return;
    }
 
    // Additional safety check for empty/null values
    if (
      !this.lease.propertyId ||
      !this.lease.tenantId ||
      !this.lease.startDate ||
      !this.lease.endDate ||
      this.lease.monthlyRent == null ||
      this.lease.monthlyRent <= 0 ||
      !this.lease.terms?.trim()
    ) {
      alert('All fields must be completed before sending to tenant.');
      return;
    }
 
    this.lease.status = 'SENT';
    console.log('Lease sent to tenant', this.lease);
    this.sent.emit(this.lease);
    alert('Lease sent to tenant!');
  }
}
 