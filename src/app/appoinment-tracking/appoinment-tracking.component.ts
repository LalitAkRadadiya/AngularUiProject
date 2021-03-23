import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { SharedService } from 'src/app/shared.service'
import { ToastrService } from 'ngx-toastr';
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
  Id: Number = 0;
  FName!: string;
  LName!: string;
  MobileNo!: Number;
  Email!: string;
  City!: string;
  Country!: string;
  Model!: string;
  Brand!: string;
  LicencePlate!: string;
  Status!: string;
  TotalTime!: string;
  TotalPrice!: string;
  CreatedBy!: string;
  UpdateBy!: string;


  MechanicId: Number;
  DealerId: Number;
  ServiceId: Number;
  CostType!: string;
  SalesPart!: string;
  Quantity!: string;
  PricePerUnit!: string;


  StartDate!: string;
  EndDate!: string;
  Duration!: string;
  constructor(private toastr: ToastrService,private service: SharedService, private router: ActivatedRoute , public spinner : NgxSpinnerService) {
  
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

        this.loadServiceList(res.DealerId);

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


  
  DealerList: any = [];
  ServiceList: any = [];
  updatedStatus: any;

  MechanicList: any = [];


  serviceAppoinment: any;
  currentAppoinmentServiceId: any;

  displayServicePlanningList = true;
  disappoinmentserviceubtton = true;

  displanningubutton = false;

  moreService_PlanningButton = false;


  moreService_Planning() {
    this.moreService_PlanningButton = false;
    this.disappoinmentserviceubtton = true;

  }

  // AppServiceList: 
  // PlanningList: 
  
  tempAppservice = false;
  validationofappoinmentservice() {
    if (!this.ServiceId) {
      this.tempAppservice = true;
    } else {
      this.tempAppservice = false;
    }
  }
  
  loadServiceList(val: any) {
    if (val != undefined) {

      this.service.serviceDropdown(val).subscribe(data => {
        console.log('load', data);
        this.ServiceList = data;
      });
    }
  }
  AddAppoinmentService() {
    this.validationofappoinmentservice();

    if (!this.tempAppservice) {

      var val = {
        AppointmentId: this.id,
        ServiceId: this.ServiceId,
        CostType: 'FIX',
        SalesPart: 50,
        Quantity: this.Quantity,
        PricePerUnit: 30,
        CreatedBy: "Lalit",
        IsAdditional: true
      };
      // this.AppServiceList.push(val);
      console.log('val cal', val);

      this.service.addAppoinmentService(val).subscribe(res => {
        console.log(res);
        this.currentAppoinmentServiceId = res;
        this.displanningubutton = true;
        this.disappoinmentserviceubtton = false;
        this.get_service_planning(val.AppointmentId);
        this.toastr.success("Created Successfully", '', {
          timeOut: 3000,
        });
      });

    } else {
      return false;
    }
  }
  MechanicNotAvailble = false;

  tempMechanicName = false;
  tempstartDate = false;
  tempEndDate = false;
  validdate = false;


}
