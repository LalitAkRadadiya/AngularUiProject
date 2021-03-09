import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-edit-vehicle',
  templateUrl: './add-edit-vehicle.component.html',
  styleUrls: ['./add-edit-vehicle.component.css']
})
export class AddEditVehicleComponent implements OnInit {

  constructor(private service:SharedService,private toastr: ToastrService) { }

  ActivateAddEditVehicalComp:boolean=true;
  @Input() vehicle: any;
  // Id: Number = 0;
  // Description!: string;
  // Brand!: string;
  // LicencePlate!: string;
  // Model!: string;
  // MeterValue!: string;
  // RegDate!: string;
  // Weight!: string;
  // MCHCode!: Number;
  // Vin!: Number;
  // EngNo!: Number;
  // Colour!: string;
  // CreatedBy!: string;
  // UpdateBy!: string;

  ngOnInit(): void {
    console.log(this.vehicle.Id);
    
    
  }

  addVehicle() {

    var val = {
      Id: 0,
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
      CustomerId:this.vehicle.CustomerId
      
    };
    console.log('vehicle added',this.vehicle);
    this.service.addVehicle(val).subscribe(res=>{
      this.toastr.success(res.toString(),'', {
        timeOut: 3000,
      });
    });

    
  }
  editVehicle() {
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
      CustomerId : this.vehicle.CustomerId
    };
    console.log('val',val);
    this.service.editVehicle(val).subscribe(res=>{
      console.log('res',res);
      this.toastr.success(res.toString(),'', {
        timeOut: 3000,
      });
    });

  }

}
