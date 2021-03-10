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
  AppServiceList : any = [];
  updatedStatus: any;

  MechanicList: any = [];
  constructor(private service: SharedService, private toastr: ToastrService) { }

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
    this.service.mechanicDropdown(this.appoinment.DealerId).subscribe(data => {
      this.MechanicList = data;
    });
  }
  loadServiceList(val: any) {
    this.service.serviceDropdown(val).subscribe(data => {
      console.log('load', data);
      this.ServiceList = data;
    });
  }
  
  AppointmentServiceList(val : any){
    this.service.getAppointmentServiceList().subscribe(data =>{
      this.AppServiceList = data.filter(x=>x.AppointmentId == val);
      console.log('data',this.AppServiceList);
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
  editAppinment = 0;
  async ngOnInit() {

    this.editAppinment = this.appoinment.Id
    await this.loadDealerList();

    if (this.appoinment != null && this.appoinment != undefined) {

      this.Id = this.appoinment.Id;
      this.FName = this.appoinment.FName;
      this.LName = this.appoinment.LName;
      this.MobileNo = this.appoinment.MobileNo;
      this.Email = this.appoinment.Email;
      this.City = this.appoinment.City;
      this.Country = this.appoinment.Country;
      this.Model = this.appoinment.Model;
      this.Brand = this.appoinment.Brand;
      this.LicencePlate = this.appoinment.LicencePlate;
      this.Status = this.appoinment.Status;
      this.StartDate = this.appoinment.StartDate;
      this.EndDate = this.appoinment.EndDate;
      this.TotalTime = this.appoinment.TotalTime;
      this.TotalPrice = this.appoinment.TotalPrice;
    }
    console.log('id',this.appoinment.Id)
    await this.AppointmentServiceList(this.appoinment.Id);

  }

  displayservice = false;
  displayMechanic = false;
  serviceAppoinment  : any;
  addAppoinment() {
    var val = this.CustomerVehicleInfo;
    val['MobileNo'] = val['CustomerNo'];
    val['Email'] = "123";
    val['DealerId'] = this.DealerId;
    val['Status'] = "pending";
    console.log('app value', val);

    this.service.addAppoinment(val).subscribe(res => {
      this.serviceAppoinment = res
      this.toastr.success("SuccessFully Created", '', {
        timeOut: 3000,
      });
      
      this.displayservice = true;
    });
    this.loadServiceList(this.DealerId);
  }
  planAvailble = false;
  AddAppoinmentService() {
    this.planAvailble = true;

    var val = {
      AppointmentId: this.serviceAppoinment,
      ServiceId: this.ServiceId,
      CostType: 'FIX',
      SalesPart: 50,
      Quantity: this.Quantity,
      PricePerUnit: 30,
      CreatedBy: "Lalit"
    };

    console.log('val cal', val);
    this.service.addAppoinmentService(val).subscribe(res => {
      this.toastr.success(res.toString(), '', {
        timeOut: 3000,
      });
      this.displayMechanic= true;
    });

  }
  createPlan() {
    var val = {
      AppointmentId: this.appoinment.Id,
      MechanicId: this.MechanicId,
      AppoinmentServiceId: 0,
      StartDate: this.StartDate,
      EndDate: this.EndDate,
      Duration: 'NULL'
    }
    this.service.addPlanning(val).subscribe(res => {
      this.toastr.success(res.toString(), '', {
        timeOut: 3000,
      });
    });
  }
  // editAppoinment(){
  //   val =  this.DealerId;
  //   var val = this.CustomerVehicleInfo;
  //   val['MobileNo'] = val['CustomerNo'];
  //   val['Email'] = "123";
  //   val['DealerId'] = this.DealerId;
  //       this.service.editAppoinment(val).subscribe(res=>{
  //       this.toastr.success(res.toString());
  //                 });
  //     }
  vehicalnotfound = false;
  getCustomerVehicleInfo(item: string) {

    try {

      this.service.getCustomerVehicleInfo(item).subscribe(data => {

        console.log('data0', data.length);
        if (data.length == 0) {
          this.vehicalnotfound = true;
        }else{
          this.vehicalnotfound= false;
        }


        this.CustomerVehicleInfo = data;


      });
    } catch (ex) {
      console.log('eee', ex);
    }
  }
}
