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
    this.vehicle={
      Id:0
    }
    
    console.log('addvehicleclick',item);
    this.vehicle = item;
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
    if(confirm('Are You Sure?')){
      this.service.deleteCustomer(item.Id).subscribe(data=>{
        this.toastr.success(data.toString(),'', {           timeOut: 2000,         });
        this.refreshcustomerList();
      });
    }
  }

  deleteVehicleClick(item:any){
    // if(confirm('Are You Sure?')){
      
      console.log('data',item.Id);
      this.service.deleteVehicle(item.Id).subscribe(data=>{
        this.toastr.success(data.toString(),'', {           timeOut: 2000,         });
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
 
  loader = "";
  refreshcustomerList() {
     
    this.loader = this.service.showLoadeer();
     this.service.getCustomerList().subscribe(data => {
      setTimeout(() => {
        
      this.CustomerList = data;


      this.loader =  this.service.hideLoader();
      }, 1000);
    }
    );
     
  }
  Customervehicle(n: number): Array<number> { 
    return Array(n); 
  } 

}
