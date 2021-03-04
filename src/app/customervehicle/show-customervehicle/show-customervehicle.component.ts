import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-customervehicle',
  templateUrl: './show-customervehicle.component.html',
  styleUrls: ['./show-customervehicle.component.css']
})
export class ShowCustomervehicleComponent implements OnInit {

  constructor(private service:SharedService) { }

  CustomerList:any = [];

  ModalTitle!:string;
  ActivateAddEditCustomerComp:boolean=true;
  ActivateAddEditVehicleComp:boolean=true;
  customer:any;
  vehicle:any;


  ngOnInit(): void {
    this.refreshAppoinmentList();
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
  refreshAppoinmentList(){
    this.service.getCustomerList().subscribe(data=>{
      debugger;
    this.CustomerList=data;
    console.log('customer',this.CustomerList);
        }
      );
    }
  numSequence(n: number): Array<number> { 
    return Array(n); 
  } 

}
