import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
 
@Component({
  selector: 'app-tenant-lease',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './tenant-lease.html',
  styleUrls: ['./tenant-lease.css']
})
export class TenantLeaseComponent {
  lease = {
    propertyId: 'p1',
    tenantId: 't1',
    startDate: '2025-01-01',
    endDate: '2026-01-01',
    monthlyRent: 1200,
    securityDeposit: 1200,
    terms: 'No smoking. No pets without approval.',
    status: 'SENT'
  };

  confirmChecked = false;
  signatureFile: File | null = null;

  @Output() accepted = new EventEmitter<void>();
  @Output() rejected = new EventEmitter<void>();

  onFileSelected(event: any) {
    this.signatureFile = event.target.files[0];
  }

  onAccept() {
    if (!this.confirmChecked) {
      alert('You must confirm acceptance before signing.');
      return;
    }
    if (!this.signatureFile) {
      alert('Please upload your digital signature before signing.');
      return;
    }
    this.lease.status = 'ACTIVE';
    this.accepted.emit();
    alert('Lease accepted and signed!');
  }

  onReject() {
    this.lease.status = 'REJECTED';
    this.rejected.emit();
    alert('Lease rejected!');
  }
}