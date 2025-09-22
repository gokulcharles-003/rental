import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { LeaseModel } from '../landlord-lease/landlord-lease';
 
@Component({
  selector: 'app-tenant-lease',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tenant-lease.html',
  styleUrls: ['./tenant-lease.css']
})
export class TenantLeaseComponent {
  @Input() lease: LeaseModel = {
    propertyId: 'p1',
    tenantId: 't1',
    startDate: '2025-01-01',
    endDate: '2026-01-01',
    monthlyRent: 1200,
    securityDeposit: 1200,
    terms: 'No smoking. No pets without approval.',
    status: 'SENT'
  };
 
  @Output() accepted = new EventEmitter<void>();
  @Output() rejected = new EventEmitter<void>();
 
  confirmChecked = false;
  signatureFile: File | null = null;
 
  onFileSelected(event: any) {
    this.signatureFile = event.target.files[0];
  }
 
  onAccept(form: NgForm) {
    if (!form.valid) {
      alert('You must confirm acceptance and upload your signature.');
      return;
    }
    if (!this.signatureFile) {
      alert('Please upload your digital signature before signing.');
      return;
    }
 
    this.lease.status = 'ACTIVE';
    console.log('Tenant accepted lease with signature', this.lease, this.signatureFile);
    this.accepted.emit();
    alert('Lease accepted and signed!');
  }
 
  onReject() {
    this.lease.status = 'REJECTED';
    console.log('Tenant rejected lease', this.lease);
    this.rejected.emit();
    alert('Lease rejected!');
  }
}
 