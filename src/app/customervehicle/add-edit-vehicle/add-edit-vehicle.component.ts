import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-vehicle',
  templateUrl: './add-edit-vehicle.component.html',
  styleUrls: ['./add-edit-vehicle.component.css']
})
export class AddEditVehicleComponent implements OnInit {

  constructor(private service:SharedService) { }

  ActivateAddEditVehicalComp:boolean=true;
  @Input() vehicle: any;
  Id: Number = 0;
  Description!: string;
  Brand!: string;
  LicencePlate!: string;
  Model!: string;
  MeterValue!: string;
  RegDate!: string;
  Weight!: string;
  MCHCode!: Number;
  Vin!: Number;
  EngNo!: Number;
  Colour!: string;
  CreatedBy!: string;
  UpdateBy!: string;

  ngOnInit(): void {
    
    
    
  }

  addVehicle() {

    var val = {
      Id: this.vehicle.Id,
      Description: this.vehicle.Description,
      Brand: this.vehicle.Brand,
      LicencePlate: this.vehicle.LicencePlate,
      Model: this.vehicle.Model,
      MeterValue: this.vehicle.MeterValue,
      RegDate: this.vehicle.RegDate,
      Weight: this.vehicle.Weight,
      MCHCode: this.vehicle.MCHCode,
      Vin: this.vehicle.Vin,
      EngNo: this.vehicle.EngNo,
      Colour: this.vehicle.Colour,
      CreatedBy: 1,
      UpdatedBy: 1,
      CustomerId:1
      //should use dyn custid
    };
    this.service.addVehicle(val).subscribe(res=>{
      alert(res.toString());
    });

    
  }
  editVehicle() {
    var val = {
      Id: this.Id,
      Description: this.Description,
      Brand: this.Brand,
      LicencePlate: this.LicencePlate,
      Model: this.Model,
      MeterValue: this.MeterValue,
      RegDate: this.vehicle.RegDate,
      Weight: this.vehicle.Weight,
      MCHCode: this.vehicle.MCHCode,
      Vin: this.vehicle.Vin,
      EngNo: this.vehicle.EngNo,
      Colour: this.vehicle.Colour,
      CreatedBy: 1,
      UpdatedBy: 1,
      CustomerId : this.vehicle.CustomerId
    };
    this.service.editVehicle(val).subscribe(res=>{
      alert(res.toString());
    });

  }

}
