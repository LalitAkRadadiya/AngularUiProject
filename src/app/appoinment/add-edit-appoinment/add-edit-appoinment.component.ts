import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-appoinment',
  templateUrl: './add-edit-appoinment.component.html',
  styleUrls: ['./add-edit-appoinment.component.css']
})
export class AddEditAppoinmentComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() appoinment:any;
  Id:Number = 0;
  FName!:string;
  LName!:string;
  MobileNo!:Number;
  EMailID!:string;
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
 

  ngOnInit(): void {
    if(this.appoinment != null && this.appoinment != undefined){
  this.Id=this.appoinment.Id;
  this.FName=this.appoinment.FName;
  this.LName=this.appoinment.LName;
  this.MobileNo=this.appoinment.MobileNo;
  this.EMailID=this.appoinment.EMailID;
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
 
  var val={Id:this.Id,
          FName:this.FName,
          LName:this.LName,
          MobileNo:this.MobileNo,
          EMailID:this.EMailID,
          City:this.City,
          Country:this.Country,
          Model:this.Model,
          Brand:this.Brand,
          LicencePlate:this.LicencePlate,
          Status:this.Status,
          StartDate:this.EndDate,
          EndDate:this.EndDate,
          TotalTime:this.TotalTime,
          TotalPrice:this.TotalPrice,
          CreatedBy:1,
          UpdatedBy:1,
        };
          this.service.addAppoinment(val).subscribe(res=>{
            alert(res.toString());
          });
}
      editAppoinment(){
          var val={Id:this.Id,
            FName:this.FName,
            LName:this.LName,
            MobileNo:this.MobileNo,
            EMailID:this.EMailID,
            City:this.City,
            Country:this.Country,
            Model:this.Model,
            Brand:this.Brand,
            LicencePlate:this.LicencePlate,
            Status:this.Status,
            StartDate:this.EndDate,
            EndDate:this.EndDate,
            TotalTime:this.TotalTime,
            TotalPrice:this.TotalPrice,
            CreatedBy:1,
            UpdatedBy:1,
          };
            this.service.editAppoinment(val).subscribe(res=>{
            alert(res.toString());
                      });
          }
  }
