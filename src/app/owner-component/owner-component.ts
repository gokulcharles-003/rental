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
    1, leases:1, payments: 3, maintenance: 0
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
    this.properties.push({...this.newProperty});
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
      reader.onload=()=>{
        this.newProperty.image=reader.result as string;
      };
      reader.readAsDataURL(file);
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
    console.log(this.properties[0]);
    this.editPropertyData = { ...property };
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

  UpdateProperty(){
    const index = this.properties.findIndex(p => p.propertyId === this.editPropertyData.propertyId);
    if(index !== -1){
      this.properties[index] = {
        ...this.editPropertyData
      };
    }
    console.log(this.properties[0]);
    this.editPropertyData = null;
  }
  
  applications=[{tenant: 'Rahul', property: 'Flat in Bangalore'}];

  leases=[{property: 'House in Hyderabad', tenant: 'Arjun', start: '01-09-2025',
     end: '31-08-2026'}];

  payments=[{tenant: 'Rahul', amount: 7500, date: '01-08-2025', status: 'Paid'},
    {tenant: 'Akash', amount: 8000, date: '05-08-2025', status: 'Paid'},
    {tenant: 'Karthi', amount: 9500, date: '02-08-2025', status: 'Paid'}
  ];
  maintenance=[{property: 'Flat in Bangalore', issue: 'Water leakage', status: 'Open'}];

  deleteProperty(property: any){
    this.properties=this.properties.filter(p => p.propertyId !==property.propertyId);
    this.summary.properties--;
  }

  approve(app: any){
    alert(`Approved ${app.tenant}`);
  }
  reject(app: any){
    alert(`Rejected ${app.tenant}`);

  }
  renewLease(lease: any){
    alert(`Renewed lease for ${lease.tenant}`);
  }
  terminateLease(lease: any){
    alert(`Terminated lease for ${lease.tenant}`);
  }
  resolve(m: any){
    m.status = "Resolved";
  }


}
