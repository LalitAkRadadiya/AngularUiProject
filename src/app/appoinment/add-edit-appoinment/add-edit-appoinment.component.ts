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

    this.get_service_planning(this.appoinment.Id);

  }
  get_service_planning(id: Number) {
    console.log('id', id)
    if (id != 0) {
      this.service.getEditAppoinmentList(id).subscribe(res => {
        this.EditAppoinment = res;


        this.AppServiceList = this.EditAppoinment.appointmentServicesList;
        this.PlanningList = this.EditAppoinment.planningList;

        console.log('get service Planingn detail', res);
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

  service_planning = false;
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
        this.service_planning = true;
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
  validationofappoinmentservice() {
    if (!this.ServiceId) {
      this.tempAppservice = true;
    } else {
      this.tempAppservice = false;
    }
  }

  deleteApppoinmentService(val: any) {
    if(confirm("Are you Sure? Want to Delete?")){
      this.service.deleteAppoinmentService(val.Id).subscribe(res => {
        this.AppServiceList = this.AppServiceList.filter((x: { Id: any; }) => x.Id != val.Id);
        this.toastr.success(res.toString(), '', {
          timeOut: 3000,
        });
      });
    }
  }
  deletePlanning(val: any) {
    if(confirm("Are you Sure? Want to Delete?")){
      console.log('dletplanid', val.Id);
      this.service.deletePlanning(val.Id).subscribe(res => {
        this.PlanningList = this.PlanningList.filter((x: { Id: any; }) => x.Id != val.Id);
        this.toastr.success(res.toString(), '', {
          timeOut: 3000,
        });
        console.log('should dlt');
      });
    }
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
      // this.AppServiceList.push(val);
      console.log('val cal', val);

      this.service.addAppoinmentService(val).subscribe(res => {
        console.log(res);
        this.currentAppoinmentServiceId = res;
        this.displanningubutton = true;
        this.disappoinmentserviceubtton = false;
        this.loadMechanicList();

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
  validationplanning() {
    if (!this.StartDate) {
      this.tempstartDate = true;
    } else {
      this.tempstartDate = false;
    }
    if (!this.EndDate) {
      this.tempEndDate = true;
    } else {
      this.tempEndDate = false;
    }
    if (!this.MechanicId) {
      this.tempMechanicName = true;
    } else {
      this.tempMechanicName = false;
    }
    if(this.StartDate && this.EndDate){
      debugger
            var sd = new Date(this.StartDate);
            var ed = new Date(this.EndDate);
            if(sd> ed){
              this.validdate = true;
            }else{
              this.validdate  = false;
            }
          }
    
  }
  createPlanning() {
    var val = {
      AppointmentId: this.serviceAppoinment,
      MechanicId: this.MechanicId,
      AppointmentServiceId: this.currentAppoinmentServiceId,
      StartDate: this.StartDate,
      EndDate: this.EndDate,
      Duration: this.EndDate

    }
    this.validationplanning();

    console.log(val);
    if (!this.tempstartDate && !this.tempEndDate && !this.tempMechanicName && !this.validdate) {
      this.service.addPlanning(val).subscribe(res => {
        console.log(res);
        if (res == "Mechanic is not Available. Choose other Date.") {
          this.toastr.error(res.toString());
          this.MechanicNotAvailble = true;
          return false;
        } else {
          this.displanningubutton = false;
          this.MechanicNotAvailble = false;
          this.moreService_PlanningButton = true;

          this.get_service_planning(val.AppointmentId);
          this.toastr.success(res.toString(), '', {
            timeOut: 3000,
          });

        }
      });
    } else {
      return false;
    }
    // this.PlanningList.push(val);








  }












}
