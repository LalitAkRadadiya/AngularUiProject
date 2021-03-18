import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { SharedService } from 'src/app/shared.service'
@Component({
  selector: 'app-appoinment-tracking',
  templateUrl: './appoinment-tracking.component.html',
  styleUrls: ['./appoinment-tracking.component.css']
})
export class AppoinmentTrackingComponent implements OnInit {

  id: any;
  counts: any[] = ["pending", "Confirm", "Started","Work done", "Finished"];
  orderStatus: any = "pending";
  appoinmentData: any;
  EditAppoinment : any;
  AppServiceList : any;
  PlanningList : any;
  constructor(private service: SharedService, private router: ActivatedRoute , public spinner : NgxSpinnerService) {
  
  }

  ModalTitle = "Apppoinment Service and Planning Details"
  ActivateAddEditAppoinmentComp = false;
  MoreDetail(){
    this.ActivateAddEditAppoinmentComp = true;
    this.get_service_planning(this.id);

  }
  closeClick(){
    this.ActivateAddEditAppoinmentComp = false;
  }
  get_service_planning(id: Number) {
    console.log('id', id)
    if (id != 0) {
      
    this.spinner.show();
      this.service.getEditAppoinmentList(id).subscribe(res => {
        this.EditAppoinment = res;


        this.AppServiceList = this.EditAppoinment.appointmentServicesList;
        this.PlanningList = this.EditAppoinment.planningList;

        this.spinner.hide();
        console.log('get service Planingn detail', res);
      });
      
    }
  }
  ngOnInit(): void {
    this.id = this.router.snapshot.params.id;
    console.log('id',this.id)


    if (this.id > 0) {
      
    this.spinner.show();
      this.service.getAppointmentById(this.id).subscribe(res => {    
        this.appoinmentData = res;
        this.orderStatus = this.appoinmentData.Status;
        this.spinner.hide();
        console.log(this.appoinmentData);
        
      });
    }
    
    this.MoreDetail();
    
  }
}
