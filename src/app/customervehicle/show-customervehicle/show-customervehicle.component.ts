import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-customervehicle',
  templateUrl: './show-customervehicle.component.html',
  styleUrls: ['./show-customervehicle.component.css']
})
export class ShowCustomervehicleComponent implements OnInit {

  constructor() { }

  CustomerList:any = [];

  ModalTitle!:string;
  ActivateAddEditCustomerComp:boolean=true;
  ActivateAddEditVehicleComp:boolean=true;
  customer:any;
  vehicle:any;


  ngOnInit(): void {
  }

  addCustomerClick(){
    this.customer={
      Id:0
    }
    this.ModalTitle="Add Customer";
    this.ActivateAddEditCustomerComp=true;
  }

  addVehicleClick(){
    this.vehicle={
      Id:0
    }
    this.ModalTitle="Add Vehicle";
    this.ActivateAddEditVehicleComp=true;
  }

  editCustomerClick(){
    // this.customer=item
    this.ModalTitle = "Edit Customer"
    this.ActivateAddEditCustomerComp=true;
  }

  editVehicleClick(){
    // this.customer=item
    this.ModalTitle = "Edit Vehicle"
    this. ActivateAddEditVehicleComp=true;
  }

  deleteCustomerClick(item:any){
    if(confirm('Are You Sure?')){
      // this.service.deleteCustomer(item.Id).subscribe(data=>{
      //   alert(data.toString());
      //   this.refreshCustomerList();
      // });
    }
  }

  deleteVehicleClick(item:any){
    if(confirm('Are You Sure?')){
      // this.service.deleteCustomer(item.Id).subscribe(data=>{
      //   alert(data.toString());
      //   this.refreshCustomerList();
      // });
    }
  }

  displayVehicles(item:Number){
    
  }

  numSequence(n: number): Array<number> { 
    return Array(n); 
  } 

}
