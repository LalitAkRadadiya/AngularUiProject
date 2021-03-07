import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';
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
  updatedStatus:any;
  ngOnInit(): void {
    // this.updateAppoinmentStatus();
    this.refreshAppoinmentList();
    setTimeout(() => {
      //init Datatable
      $('#filterListTable').DataTable(
      {
      "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]]
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
  updateAppoinmentStatus(id : any){
      var val = {
        Id: id,
        Status : this.updatedStatus
      }
      this.service.editAppoinmentStatus(val).subscribe(res=>{
        this.toastr.success(res.toString());
      });
  }
  editClick(item:any){
    this.appoinment={
      Id: item.Id
    }
    this.appoinment=item
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
        this.toastr.success(data.toString());
        this.refreshAppoinmentList();
      });
    }

  }
refreshAppoinmentList(){
  this.service.getAppointmentList().subscribe(data=>{
    console.log('data',data);
  this.AppointmentList=data;
      }
    );
  }
}