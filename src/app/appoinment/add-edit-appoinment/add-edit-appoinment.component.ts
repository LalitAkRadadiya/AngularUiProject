import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-appoinment',
  templateUrl: './add-edit-appoinment.component.html',
  styleUrls: ['./add-edit-appoinment.component.css']
})
export class AddEditAppoinmentComponent implements OnInit {

  DealerList : any= [];
  ServiceList : any = [];
  constructor(private service:SharedService) { }
  CustomerVehicleInfo: any;
  @Input() appoinment:any;
  Id:Number = 0;
  FName!:string;
  LName!:string;
  MobileNo!:Number;
  Email!:string;
  City!:string;
  Country!:string;
  Model!:string;
  Brand!:string;
  LicencePlate!:string;
  Status!:string;
  StartDate!:string;
  EndDate!:string;
  TotalTime!:string;
  TotalPrice!:string;
  CreatedBy!:string;
  UpdateBy!:string;


  DealerId : Number;
  ServiceId: Number;
  CostType!: string;
  SalesPart!: string;
  Quantity!: string;
  PricePerUnit!: string;


  loadDealerList(){
    this.service.dealerDropdown().subscribe(data=>{
      this.DealerList = data;
    });
  }
  loadServiceList(){
    console.log(this.appoinment.DealerId);
    this.service.serviceDropdown(this.appoinment.DealerId).subscribe(data=>{
      console.log('load',data);
      this.ServiceList = data;
    });
  }
  
  editAppinment = 0;
  ngOnInit(): void {

    this.editAppinment = this.appoinment.Id
    this.loadDealerList();
    
    if(this.appoinment != null && this.appoinment != undefined){
      
  this.Id=this.appoinment.Id;
  this.FName=this.appoinment.FName;
  this.LName=this.appoinment.LName;
  this.MobileNo=this.appoinment.MobileNo;
  this.Email=this.appoinment.Email;
  this.City=this.appoinment.City;
  this.Country=this.appoinment.Country;
  this.Model=this.appoinment.Model;
  this.Brand=this.appoinment.Brand;
  this.LicencePlate=this.appoinment.LicencePlate;
  this.Status=this.appoinment.Status;
  this.StartDate=this.appoinment.StartDate;
  this.EndDate=this.appoinment.EndDate;
  this.TotalTime=this.appoinment.TotalTime;
  this.TotalPrice=this.appoinment.TotalPrice;
    }
  }

addAppoinment(){
        var val = this.CustomerVehicleInfo;
        val['MobileNo'] =  val['CustomerNo'];
        val['Email'] = "123";
        val['DealerId'] = this.DealerId;
        val['Status'] = "pending";
        console.log('app value',val);

          this.service.addAppoinment(val).subscribe(res=>{
            alert(res.toString());
          });
}
editAppoinment(){
          
  
  var val = {
    AppointmentId: this.appoinment.Id,
    ServiceId: this.ServiceId,
    CostType:this.CostType,
    SalesPart: this.SalesPart,
    Quantity: this.Quantity,
    PricePerUnit: this.PricePerUnit,
    CreatedBy : "Lalit"
  };

    console.log('val cal',val);
  this.service.addAppoinmentService(val).subscribe(res=>{
    alert(res.toString());
  });


      }
      // editAppoinment(){
      //   val =  this.DealerId;
      //   var val = this.CustomerVehicleInfo;
      //   val['MobileNo'] = val['CustomerNo'];
      //   val['Email'] = "123";
      //   val['DealerId'] = this.DealerId;
      //       this.service.editAppoinment(val).subscribe(res=>{
      //       alert(res.toString());
      //                 });
      //     }
          getvehical = false;
          getCustomerVehicleInfo(item: string){
            
            this.getvehical = true;
            this.service.getCustomerVehicleInfo(item).subscribe(data => {
              delete data.Email
              console.log('data0',data);
            this.CustomerVehicleInfo = data;
            });
          }
  }
