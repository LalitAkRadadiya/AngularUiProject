import { Component, OnInit, AfterViewInit,enableProdMode, Input } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';

import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-show-mechanical',
  templateUrl: './show-mechanical.component.html',
  styleUrls: ['./show-mechanical.component.css']
})
export class ShowMechanicalComponent implements OnInit {

  

  ActivateAddEditMechanicComp:boolean=false;
  
  constructor(private service:SharedService,private toastr: ToastrService, private spinner : NgxSpinnerService) { }
  mechanic:any;
  MechanicList:any = [];

  ModalTitle!:string;
  mechanicmain:any;


  ngOnInit(): void {
    
    this.refreshMechanicList();
    
    
  }
  
  addMechanicClick(){
    this.mechanic={
      Id:0
    }
    this.ModalTitle="Add Mechanic";
  
    
    this.ActivateAddEditMechanicComp=true;
  }


  editMechanicClick(item : any){
    this.mechanic=item;
    this.ModalTitle = "Edit Mechanic";
    
    
    this.ActivateAddEditMechanicComp=true;
  }

  closeClick(){
    this.ActivateAddEditMechanicComp=false;
    this.refreshMechanicList();
  }
  deleteMechanic(item:any){
    if(confirm("Are you sure? Want to Delete?")){
      this.service.deleteMechanic(item.Id).subscribe(data=>{
        this.toastr.success(data.toString(),'', {           timeOut: 2000,         });
        this.refreshMechanicList();
      });
    }
  }

  refreshMechanicList(){
    
    this.spinner.show();
    this.service.getMechanicList().subscribe(data => {
       
     this.MechanicList = data;

     this.spinner.hide();
     

   });
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
    this.MechanicList = this.MechanicList.sort((a: any, b: any) => {
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
