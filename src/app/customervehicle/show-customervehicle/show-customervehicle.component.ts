import { Component, OnChanges, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-show-customervehicle',
  templateUrl: './show-customervehicle.component.html',
  styleUrls: ['./show-customervehicle.component.css']
})
export class ShowCustomervehicleComponent implements OnInit {


  isEdit= false;
  
  constructor(private service:SharedService,private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  CustomerList:any = [];
  

  ActivateAddEditVehicalComp:boolean=true;

  ModalTitle!:string;
  customer:any;
  vehicle:any;

 
  ngOnInit(): void {
    this.refreshcustomerList();
    setTimeout(() => {
      //init Datatable
      $('#filterListTable').DataTable(
      {
      "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]],
      stateSave: true,
      }
      );
      }, 5000);
    
  
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
    
    
    console.log('addvehicleclick',item);
    this.vehicle = item;
    this.vehicle={
      Id:0,
      CustomerId: item.Id
    }
    this.ModalTitle="Add Vehicle";
    this.ActivateAddEditVehicalComp=true;
    
    this.addeditVehicle = true;
  }

  editVehicleClick(item: any){
    this.vehicle=item
    this.ModalTitle = "Edit Vehicle";
    this. ActivateAddEditVehicalComp=true;
    
    this.addeditVehicle = true;
  }

  deleteCustomerClick(item:any){
    if(confirm('Are You Sure? Want to Delete?')){
      this.service.deleteCustomer(item.Id).subscribe(data=>{
        this.toastr.success(data.toString(),'', {           timeOut: 2000,         });
        this.refreshcustomerList();
      });
    }
  }

  deleteVehicleClick(item:any){
    if(confirm('Are You Sure? Want to Delete?')){
      
      console.log('data',item.Id);
      this.service.deleteVehicle(item.Id).subscribe(data=>{
        this.toastr.success(data.toString(),'', {           timeOut: 2000,         });
        console.log('data',data);
        this.refreshcustomerList();
      });
    }
  }
  display = false;
 


  vehical:any = [];
  currentVehical = 0;

  displayVehicles(item:any){
    this.display= true;
    this.currentVehical = item.Id;
    this.spinner.show();
    this.service.getVehicalById(item.Id).subscribe(data=>{
      this.vehical = data;
      this.spinner.hide();
    });
    
  }
 
  refreshcustomerList() {
    this.spinner.show();
     this.service.getCustomerList().subscribe(data => {
        
      this.CustomerList = data;

      this.spinner.hide();
    }
    );
     
  }
  Customervehicle(n: number): Array<number> { 
    return Array(n); 
  } 

}
