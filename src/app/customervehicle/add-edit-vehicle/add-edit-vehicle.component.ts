import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-edit-vehicle',
  templateUrl: './add-edit-vehicle.component.html',
  styleUrls: ['./add-edit-vehicle.component.css']
})
export class AddEditVehicleComponent implements OnInit {

  constructor(private service: SharedService, private toastr: ToastrService) { }

  ActivateAddEditVehicalComp: boolean = true;
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


  }

  tempDescription = false;
  tempBrand = false;
  tempLicencePlate = false;
  tempModel = false;
  tempMeterValue = false;
  tempRegDate = false;
  tempWeight = false;
  tempMCHCode = false;
  tempVIN = false;
  tempEngNo = false;
  tempColour = false;




  validationCheck() {
    if (!this.vehicle.Description) {
      this.tempDescription = true;
    }
    else {
      this.tempDescription = false;
    }
    if (!this.vehicle.Brand) {
      this.tempBrand = true;
    }
    else {
      this.tempBrand = false;
    }
    if (!this.vehicle.LicencePlate) {
      this.tempLicencePlate = true;
    }
    else {
      this.tempLicencePlate = false;
    }
    if (!this.vehicle.Model) {
      this.tempModel = true;
    }
    else {
      this.tempModel = false;
    }
    if (!this.vehicle.MeterValue) {
      this.tempMeterValue = true;
    }
    else {
      this.tempMeterValue = false;
    }
    if (!this.vehicle.RegDate) {
      this.tempRegDate = true;
    }
    else {
      this.tempRegDate = false;
    }
    if (!this.vehicle.Weight) {
      this.tempWeight = true;
    }
    else {
      this.tempWeight = false;
    }
    if (!this.vehicle.MCHCode) {
      this.tempMCHCode = true;
    }
    else {
      this.tempMCHCode = false;
    }
    if (!this.vehicle.Vin) {
      this.tempVIN = true;
    }
    else {
      this.tempVIN = false;
    }
    if (!this.vehicle.EngNo) {
      this.tempEngNo = true;
    }
    else {
      this.tempEngNo = false;
    }
    if (!this.vehicle.Colour) {
      this.tempColour = true;
    }
    else {
      this.tempColour = false;
    }
  }
  vahicleavailblecheck = false;
  addVehicle() {

    this.validationCheck();

    if (!this.tempDescription && !this.tempBrand && !this.tempLicencePlate && !this.tempModel && !this.tempMeterValue && !this.tempRegDate && !this.tempWeight && !this.tempMCHCode && !this.tempVIN && !this.tempEngNo && !this.tempColour) {
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
        CustomerId: this.vehicle.CustomerId

      };
      this.service.addVehicle(val).subscribe(res => {
        if(res == "Vehicle is Available"){
          this.vahicleavailblecheck = true;
          return false;
        }else{
          this.vahicleavailblecheck = false;
          
          let element: HTMLElement = document.getElementsByClassName('btn-danger')[0] as HTMLElement;
          element.click();
        }
        this.toastr.success(res.toString(), '', {
          timeOut: 3000,
        });
      });
     
    }
    else {
      return false;
    }




  }

  editVehicle() {

    this.validationCheck();
    if (!this.tempDescription && !this.tempBrand && !this.tempLicencePlate && !this.tempModel && !this.tempMeterValue && !this.tempRegDate && !this.tempWeight && !this.tempMCHCode && !this.tempVIN && !this.tempEngNo && !this.tempColour) {

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
        CustomerId: this.vehicle.CustomerId
      };
      this.service.editVehicle(val).subscribe(res => {
        this.toastr.success(res.toString(), '', {
          timeOut: 3000,
        });
      });
      let element: HTMLElement = document.getElementsByClassName('btn-danger')[0] as HTMLElement;
      element.click();

    } else {
      return false;
    }
  }
  IsNumeric(e: KeyboardEvent) {
    var keyCode = e.which ? e.which : e.keyCode;
    //// Allow: backspace, delete, tab, escape, enter and .
    if (
      $.inArray(keyCode, [8, 9, 27, 13, 190, 44, 45, 46]) !== -1 ||
      // Allow: Ctrl+A, Command+A
      (keyCode == 65 && (e.ctrlKey === true || e.metaKey === true))
    ) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if (e.shiftKey || keyCode < 48 || keyCode > 57) {
      e.preventDefault();
    }
  }
}