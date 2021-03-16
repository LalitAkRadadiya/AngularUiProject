import { Component, OnInit, AfterViewInit,enableProdMode } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-show-mechanical',
  templateUrl: './show-mechanical.component.html',
  styleUrls: ['./show-mechanical.component.css']
})
export class ShowMechanicalComponent implements OnInit {

  

  ActivateAddEditMechanicComp:boolean=false;
  
  constructor(private service:SharedService,private toastr: ToastrService) { }
  mechanic:any;
  MechanicList:any = [];

  ModalTitle!:string;
  mechanicmain:any;


  ngOnInit(): void {
      setTimeout(() => {
        //init Datatable
        $('#filterListTable').DataTable(
        {
        "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]],
        stateSave: true,
        }
        );
        }, 5000);
    
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
    this.service.getMechanicList().subscribe(data => {
       
     this.MechanicList = data;


   }
   );
    }
 

}
