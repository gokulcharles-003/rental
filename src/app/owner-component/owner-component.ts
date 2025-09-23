import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-owner-component',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './owner-component.html',
  styleUrl: './owner-component.css'
   
})
export class OwnerComponent {
  summary={properties: 0, applications:
    3, leases:3, payments: 3, maintenance: 0
  };

  properties: any[]=[];
  newProperty: any={
    propertyId: '',
    ownerId: '',
    name: '',
    address: '',
    rentAmount: null,
    availabilityStatus: 'Available',
    image: ''
  };

   addProperty(){
    this.properties.push(this.newProperty);
    console.log(this.properties);
    this.newProperty = {propertyId: null,
      name: '',
      address: '',
      rentAmount: null,
      description: '',
      size: null,
      availabilityStatus: 'Available',
      image:''
    };
    this.summary.properties++;
  }

    onImageSelected(event: any){
    const file = event.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload=()=>{
        this.newProperty.image=reader.result as string;
      };
    }
  }

  editPropertyData: any=null;
  selectedImage: string | null=null;

  openImage(image: string){
    this.selectedImage=image;
  }

  closeImage(){
    this.selectedImage=null;
  }

  openEditForm(property: any){
    this.editPropertyData = property ;
  }

  UpdateProperty(){
    const index = this.properties.findIndex(p => p.propertyId === this.editPropertyData.propertyId);
    if(index !== -1){
      this.properties[index] = 
        this.editPropertyData
      ;
    }
    this.editPropertyData = null;
  }
  
  closeEditForm(){
    this.editPropertyData=null;
  }

  onEditImageSelected(event: any){
    const file=event.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload=() => {
        this.editPropertyData.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  deleteProperty(property: any){
    this.properties=this.properties.filter(p => p.propertyId !==property.propertyId);
    this.summary.properties--;
  }

  leases = [
  {
    property: 'Green Villa',
    tenant: 'Amit Sharma',
    start: '2025-01-01',
    end: '2026-01-01',
    status: 'Pending'
  },
  {
    property: 'Sunshine Residency',
    tenant: 'Priya Singh',
    start: '2024-06-01',
    end: '2025-06-01',
    status: 'Renewed'
  },
  {
    property: 'Lakeview Apartment',
    tenant: 'Rahul Verma',
    start: '2024-03-01',
    end: '2025-03-01',
    status: 'Terminated'
  }
];

  renewLease(lease: any) {
    alert(`Renewed lease for ${lease.tenant}`);
    lease.status = 'Renewed';
  }

  terminateLease(lease: any) {
    alert(`Terminated lease for ${lease.tenant}`);
    lease.status = 'Terminated';
  }

  payments=[{tenant: 'Rahul', amount: 7500, date: '01-08-2025', status: 'Paid'},
    {tenant: 'Akash', amount: 8000, date: '05-08-2025', status: 'Paid'},
    {tenant: 'Karthi', amount: 9500, date: '02-08-2025', status: 'Pending'}
  ];

}
