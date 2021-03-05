import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-customervehicle',
  templateUrl: './show-customervehicle.component.html',
  styleUrls: ['./show-customervehicle.component.css']
})
export class ShowCustomervehicleComponent implements OnInit {


  isEdit= false;
  
  constructor(private service:SharedService) { }

  CustomerList:any = [];
  

  ActivateAddEditVehicalComp:boolean=true;

  ModalTitle!:string;
  customer:any;
  vehicle:any;


  ngOnInit(): void {
    this.refreshcustomerList();
  }

  addCustomerClick(){
    this.customer={
      Id:0
    }
    this.ModalTitle="Add Customer";
    this.isEdit = true;
  }
  editCustomerClick(item : any){
    this.customer = item;    
    this.ModalTitle = "Edit Customer"
    this.isEdit = true;
  }

  addVehicleClick(){
    this.vehicle={
      Id:0
    }
    this.ModalTitle="Add Vehicle";
    this.ActivateAddEditVehicalComp=true;
    
  }

 

  editVehicleClick(){
    // this.customer=item
    this.ModalTitle = "Edit Vehicle"
    this. ActivateAddEditVehicalComp=true;
  }

  deleteCustomerClick(item:any){
    if(confirm('Are You Sure?')){
      this.service.deleteCustomer(item.Id).subscribe(data=>{
        alert(data.toString());
        this.refreshcustomerList();
      });
    }
  }

  // deleteVehicleClick(item:any){
  //   if(confirm('Are You Sure?')){
  //     // this.service.deleteCustomer(item.Id).subscribe(data=>{
  //     //   alert(data.toString());
  //     //   this.refreshcustomerList();
  //     // });
  //   }
  // }

  // displayVehicles(item:Number){
    
  // }
  refreshcustomerList(){
    this.service.getCustomerList().subscribe(data=>{
    this.CustomerList=data;
        }
      );
    }
  // numSequence(n: number): Array<number> { 
  //   return Array(n); 
  // } 

}
