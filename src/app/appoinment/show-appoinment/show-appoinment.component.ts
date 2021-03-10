import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';
import { AddEditAppoinmentComponent } from '../add-edit-appoinment/add-edit-appoinment.component';
@Component({
  selector: 'app-show-appoinment',
  templateUrl: './show-appoinment.component.html',
  styleUrls: ['./show-appoinment.component.css']
})
export class ShowAppoinmentComponent implements OnInit {

  constructor(private service:SharedService,private toastr: ToastrService) { }

  AppointmentList:any=[];

  ModalTitle!:string;
  ActivateAddEditAppoinmentComp:boolean=false;
  appoinment:any;

  
  ngOnInit(): void {
    // this.updateAppoinmentStatus();
    this.refreshAppoinmentList();
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
  addClick(){
    this.appoinment={
      Id:0
    }
    this.appoinment={
      Id:0,
      FName:"",
      LName:"",
      MobileNo:"",
      EMailID:"",
      City:"",
      Country:"",
      Model:"",
      Brand:"",
      Status:"",
      StartDate:"",
      EndDate:"",
      TotalTime:"",
      TotalPrice:"",
      
    }
    this.ModalTitle="Add Appoinment";
    this.ActivateAddEditAppoinmentComp=true;

  }
  
  editClick(item:any){
    this.appoinment={
      Id: item.Id
    }
    this.appoinment=item;

    
    console.log('curent ap', this.appoinment);
    this.ModalTitle="Edit Appoinment";
    this.ActivateAddEditAppoinmentComp=true;
  }
  closeClick(){
    this.ActivateAddEditAppoinmentComp=false;
    this.refreshAppoinmentList();
  }

  deleteClick(item:any){
    if(confirm('Are You Sure?')){
      this.service.deleteAppoinment(item.Id).subscribe(data=>{
        this.toastr.success(data.toString(),'', {           timeOut: 2000,         });
        this.refreshAppoinmentList();
      });
    }

  }

  
  loader = "";
  refreshAppoinmentList() {
     
    this.loader = this.service.showLoadeer();
     this.service.getAppointmentList().subscribe(data => {
      setTimeout(() => {
        
      this.AppointmentList = data;


      this.loader =  this.service.hideLoader();
      }, 1000);
    }
    );
     
  }
}