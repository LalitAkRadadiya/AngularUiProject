import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-show-customervehicle',
  templateUrl: './show-customervehicle.component.html',
  styleUrls: ['./show-customervehicle.component.css']
})
export class ShowCustomervehicleComponent implements OnInit {


  isEdit= false;
  
  constructor(private service:SharedService,private toastr: ToastrService) { }

  CustomerList:any = [];
  

  ActivateAddEditVehicalComp:boolean=true;

  ModalTitle!:string;
  customer:any;
  vehicleA:any;


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

  
 addeditVehicle = false;
  addVehicleClick(item: any){
    this.vehicleA={
      Id:0
    }
    this.vehicleA = item;
    this.ModalTitle="Add Vehicle";
    this.ActivateAddEditVehicalComp=true;
    
    this.addeditVehicle = true;
  }

  editVehicleClick(item: any){
    this.vehicleA=item
    this.ModalTitle = "Edit Vehicle";
    this. ActivateAddEditVehicalComp=true;
    
    this.addeditVehicle = true;
  }

  deleteCustomerClick(item:any){
    if(confirm('Are You Sure?')){
      this.service.deleteCustomer(item.Id).subscribe(data=>{
        this.toastr.success(data.toString());
        this.refreshcustomerList();
      });
    }
  }

  deleteVehicleClick(item:any){
    // if(confirm('Are You Sure?')){
      
      console.log('data',item.Id);
      this.service.deleteVehicle(item.Id).subscribe(data=>{
        this.toastr.success(data.toString());
        console.log('data',data);
        this.refreshcustomerList();
      });
    // }
  }
  display = false;
 


  vehical:any = [];
  currentVehical = 0;
  displayVehicles(item:any){
    this.display= true;
    this.currentVehical = item.Id;
    this.service.getVehicalById(item.Id).subscribe(data=>{
      this.vehical = data;
    });
    
  }
  refreshcustomerList(){
    this.service.getCustomerList().subscribe(data=>{
    this.CustomerList=data;
        }
      );
    }
  Customervehicle(n: number): Array<number> { 
    return Array(n); 
  } 

}
