import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-appoinment',
  templateUrl: './show-appoinment.component.html',
  styleUrls: ['./show-appoinment.component.css']
})
export class ShowAppoinmentComponent implements OnInit {

  constructor(private service:SharedService) { }

  AppointmentList:any=[];

  ModalTitle!:string;
  ActivateAddEditAppoinmentComp:boolean=true;
  appoinment:any;

  ngOnInit(): void {
    this.refreshAppoinmentList();
  }
  addClick(){
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
    this.appoinment=item
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
        alert(data.toString());
        this.refreshAppoinmentList();
      });
    }

  }
refreshAppoinmentList(){
  this.service.getAppointmentList().subscribe(data=>{
    debugger;
  this.AppointmentList=data;
      }
    );
  }
}