import { Component, OnInit,Input, AfterViewInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {  ViewChild  } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';
import { AddEditAppoinmentComponent } from './add-edit-appoinment/add-edit-appoinment.component';
@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent implements OnInit  {


 
  constructor(private titleService:Title,private service:SharedService,private toastr: ToastrService) { 
    this.titleService.setTitle("Appoinment");
  }
  @Input() appoinment:any;




  // @ViewChild(AddEditAppoinmentComponent) getappoinment :  AddEditAppoinmentComponent;

  // ngAfterViewInit(): void {
   
  //   this.getappoinment.getdata();
  // }




  AppointmentList:any=[];

  ModalTitle!:string;
  ActivateAddEditAppoinmentComp:boolean=false;
  

  
  ngOnInit(): void {
    // this.updateAppoinmentStatus();
    this.refreshAppoinmentList();
    this.tabelLoad();
  }
  tabelLoad(){
    setTimeout(() => {
      //init Datatable
      $('#filterListTable').DataTable(
      {
      "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]],
      stateSave: true,
      }
      );
      }, 3000);
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
    // this.AppointmentServiceList(this.appoinment.Id);
    // this.planningList(this.appoinment.Id);

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
    this.refreshAppoinmentList();

  }

  
  refreshAppoinmentList() {
     
     this.service.getAppointmentList().subscribe(data => {
      this.AppointmentList = data;
    }
    );
     
  }

}
