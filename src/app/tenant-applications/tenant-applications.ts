import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-tenant-applications',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './tenant-applications.html',
  styleUrl: './tenant-applications.css'
})
export class TenantApplications {
  applications = [
    {
      tenantName: 'Amit Sharma',
      tenantEmail: 'amit.sharma@email.com',
      tenantMobile: '9876543210',
      propertyId: 'p1',
      propertyName: 'Green Villa',
      status: 'Pending',
      action: 'pending'
    },
    {
      tenantName: 'Priya Singh',
      tenantEmail: 'priya.singh@email.com',
      tenantMobile: '9123456789',
      propertyId: 'p2',
      propertyName: 'Sunshine Residency',
      status: 'Pending',
      action: 'accepted'
    },
    {
      tenantName: 'Rahul Verma',
      tenantEmail: 'rahul.verma@email.com',
      tenantMobile: '9988776655',
      propertyId: 'p3',
      propertyName: 'Lakeview Apartment',
      status: 'Rejected',
      action: 'rejected'
    }
  ];

  showLeaseModal = false;

  properties = [
    { id: 'p1', label: 'Green Villa' },
    { id: 'p2', label: 'Sunshine Residency' },
    { id: 'p3', label: 'Lakeview Apartment' }
  ];

  tenants = [
    { id: 't1', name: 'Amit Sharma' },
    { id: 't2', name: 'Priya Singh' },
    { id: 't3', name: 'Rahul Verma' }
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

  openLeaseModal(app: any) {
    this.lease.propertyId = app.propertyId;
    this.lease.tenantId = this.tenants.find(t => t.name === app.tenantName)?.id || '';
    this.lease.startDate = '';
    this.lease.endDate = '';
    this.lease.monthlyRent = null;
    this.lease.securityDeposit = null;
    this.lease.terms = '';
    this.lease.status = 'DRAFT';
    this.showLeaseModal = true;
  }

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

  reject(app: any) {
    app.action = 'rejected';
    app.status = 'Rejected';
  }
}