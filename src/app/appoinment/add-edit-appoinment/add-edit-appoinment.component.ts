import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-edit-appoinment',
  templateUrl: './add-edit-appoinment.component.html',
  styleUrls: ['./add-edit-appoinment.component.css']
})
export class AddEditAppoinmentComponent implements OnInit {

  DealerList: any = [];
  ServiceList: any = [];

  EditAppoinment: any = [];
  AppServiceList: any = [];
  PlanningList: any = [];
  updatedStatus: any;

  MechanicList: any = [];

  
  serviceAppoinment: any;
  currentAppoinmentServiceId: any;

  constructor(private service: SharedService, private toastr: ToastrService) { }
  statusArray = ['pending', 'Confirm', 'Work done', 'Started', 'Finished']
  CustomerVehicleInfo: any;
  @Input() appoinment: any;
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


  loadDealerList() {
    this.service.dealerDropdown().subscribe(data => {
      this.DealerList = data;
    });
  }
  loadMechanicList() {
    console.log('', this.DealerId);
    this.service.mechanicDropdown(this.DealerId).subscribe(data => {
      this.MechanicList = data;
    });
  }
  loadServiceList(val: any) {
    this.service.serviceDropdown(val).subscribe(data => {
      console.log('load', data);
      this.ServiceList = data;
    });
  }
  updateAppoinmentStatus(id: any) {
    var val = {
      Id: id,
      Status: this.updatedStatus
    }

    this.service.editAppoinmentStatus(val).subscribe(res => {
      this.toastr.success(res.toString(), '', {
        timeOut: 3000,
      });
    });
  }

  ngOnInit() {

    this.loadDealerList();

    console.log('id', this.appoinment.Id)
    if(this.appoinment.Id != 0){
      this.service.getEditAppoinmentList(this.appoinment.Id).subscribe(res => {
        this.EditAppoinment = res;
        
  
          this.AppServiceList = this.EditAppoinment.appointmentServicesList;
          this.PlanningList = this.EditAppoinment.planningList;
        
        console.log('id', res);
      });
    }

  }

  tempDealer = false;
  addappvalidation() {
    if (!this.DealerId) {
      this.tempDealer = true;
    } else {
      this.tempDealer = false;
    }
  }
  
  service_planning= false;
  disableappoinmentbutton = false;
  addAppoinment() {
    this.addappvalidation();
    if (!this.tempDealer) {

      var val = this.CustomerVehicleInfo;
      val['MobileNo'] = val['CustomerNo'];
      val['Email'] = "123";
      val['DealerId'] = this.DealerId;
      val['Status'] = "pending";
      console.log('app value', val);

      this.service.addAppoinment(val).subscribe(res => {
        this.serviceAppoinment = res;
        this.service_planning =true;
        this.toastr.success("SuccessFully Created", '', {
          timeOut: 3000,
        });

      });
      this.loadServiceList(this.DealerId);
      this.disableappoinmentbutton = true;
    } else {
      return false;
    }
  }
  
  tempAppservice = false;
  validationofappoinmentservice(){
    if (!this.ServiceId) {
      this.tempAppservice = true;
    } else {
      this.tempAppservice = false;
    }
  }

  deleteApppoinmentService(val: any) {
    this.service.deleteAppoinmentService(val.Id).subscribe(res => {
      // this.AppServiceList = this.AppServiceList.filter((x: { Id: any; })=>x.Id != val.Id);
      this.toastr.success(res.toString(), '', {
        timeOut: 3000,
      });
    });
  }
  deletePlanning(val: any) {
    console.log('dletplanid', val.Id);
    this.service.deletePlanning(val.Id).subscribe(res => {
      // this.PlanningList = this.PlanningList.filter((x: { Id: any; })=>x.Id != val.Id);
      this.toastr.success(res.toString(), '', {
        timeOut: 3000,
      });
      console.log('should dlt');
    });
  }
  
  vehicalnotfound = false;
  getCustomerVehicleInfo(item: string) {
    try {
      this.service.getCustomerVehicleInfo(item).subscribe(data => {

        console.log('data0', data.length);
        if (data.length == 0) {
          this.vehicalnotfound = true;
        } else {
          this.vehicalnotfound = false;
        }
        this.CustomerVehicleInfo = data;


      });
    } catch (ex) {
      console.log('eee', ex);
    }
  }
























  displayServicePlanningList =true;
  disappoinmentserviceubtton = true;

  displanningubutton = false;

  moreService_PlanningButton = false;


  moreService_Planning(){
    this.moreService_PlanningButton = false;
    this.disappoinmentserviceubtton = true;

  }
  
  // AppServiceList: 
  // PlanningList: 
  AddAppoinmentService() {
    this.validationofappoinmentservice();

    if (!this.tempAppservice) {

      var val = {
        AppointmentId: this.serviceAppoinment,
        ServiceId: this.ServiceId,
        CostType: 'FIX',
        SalesPart: 50,
        Quantity: this.Quantity,
        PricePerUnit: 30,
        CreatedBy: "Lalit"
      };
      this.AppServiceList.push(val);
      console.log('val cal', val);
      this.service.addAppoinmentService(val).subscribe(res => {
        console.log(res);
        this.currentAppoinmentServiceId = res;
        this.displanningubutton = true;
        this.disappoinmentserviceubtton = false;
        this.toastr.success("Created Successfully", '', {
          timeOut: 3000,
        });
      });

    } else {
      return false;
    }
  }
  createPlanning() {
    var val = {
      AppointmentId: this.serviceAppoinment,
      MechanicId: 28,
      AppointmentServiceId: this.currentAppoinmentServiceId,
      StartDate: this.StartDate,
      EndDate: this.EndDate,
      Duration: this.EndDate

    }
    console.log(val);
    
    this.PlanningList.push(val);
    this.service.addPlanning(val).subscribe(res => {
      console.log(res);
      this.displanningubutton = false;
      this.moreService_PlanningButton = true;
      this.toastr.success(res.toString(), '', {
        timeOut: 3000,
      });
    });
    


    
  }
  











}
