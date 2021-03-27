import { Component, OnChanges, OnInit, Input } from '@angular/core';

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
      
      this.service.deleteVehicle(item.Id).subscribe(data=>{
        this.toastr.success(data.toString(),'', {           timeOut: 2000,         });
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
  closeClick(){
    this.refreshcustomerList();  
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

   

  @Input() isAscending: boolean = true
  @Input() sortedColumn: string = '';


  sortMaterialData(columnName: string, isIgnoreDirectionCheck: boolean = false) {
    if (!isIgnoreDirectionCheck) {
      if (this.sortedColumn == columnName) {
        this.isAscending = !this.isAscending;
      }
      else {
        this.sortedColumn = columnName;
        this.isAscending = true;
      }
    }
    let sortOrder = this.isAscending ? 1 : -1;
    this.CustomerList = this.CustomerList.sort((a: any, b: any) => {
      let val1 = a[columnName];
      let val2 = b[columnName];

      if (val1 == undefined || val1 == null) {
        val1 = '';
      }
      else {
        val1 = val1
      }
      if (val2 == undefined || val1 == null) {
        val2 = '';
      }
      else {
        val2 = val2
      }
      let result = (val1 < val2) ? -1 : (val1 > val2) ? 1 : 0;

      return result * sortOrder;
    });
  }
}
