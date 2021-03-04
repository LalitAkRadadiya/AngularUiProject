import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-edit-vehicle',
  templateUrl: './add-edit-vehicle.component.html',
  styleUrls: ['./add-edit-vehicle.component.css']
})
export class AddEditVehicleComponent implements OnInit {

  constructor() { }

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
      // this.Id = this.vehicle.Id;
      // this.Description = this.vehicle.Description;
      // this.Brand = this.vehicle.Brand;
      // this.LicencePlate = this.vehicle.LicencePlate;
      // this.Model = this.vehicle.Model;
      // this.MeterValue = this.vehicle.MeterValue;
      // this.RegDate = this.vehicle.RegDate;
      // this.Weight = this.vehicle.Weight;
      // this.MCHCode = this.vehicle.MCHCode;
      // this.Vin = this.vehicle.Vin;
      // this.EngNo = this.vehicle.EngNo;
      // this.Colour = this.vehicle.Colour;
    
  }

  addVehicle() {

    var val = {
      Id: this.Id,
      Description: this.Description,
      Brand: this.Brand,
      LicencePlate: this.LicencePlate,
      Model: this.Model,
      MeterValue: this.MeterValue,
      RegDate: this.RegDate,
      Weight: this.Weight,
      MCHCode: this.MCHCode,
      Vin: this.Vin,
      EngNo: this.EngNo,
      Colour: this.Colour,
      CreatedBy: 1,
      UpdatedBy: 1,
    };
  }
  editVehicle() {
    var val = {
      Id: this.Id,
      Description: this.Description,
      Brand: this.Brand,
      LicencePlate: this.LicencePlate,
      Model: this.Model,
      MeterValue: this.MeterValue,
      RegDate: this.RegDate,
      Weight: this.Weight,
      MCHCode: this.MCHCode,
      Vin: this.Vin,
      EngNo: this.EngNo,
      Colour: this.Colour,
      CreatedBy: 1,
      UpdatedBy: 1,
    };
    // this.service.editCustomer(val).subscribe(res=>{
    // alert(res.toString());
    //           });
  }

}
