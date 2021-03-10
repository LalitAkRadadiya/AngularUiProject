import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit {

  constructor(private service: SharedService, private toastr: ToastrService) { }

  @Input() customer: any;


  ngOnInit(): void {


  }


  tempFName = false;
  tempLName = false;
  tempAddress = false;
  tempZipCode = false;
  tempCity = false;
  tempCountry = false;
  tempEmail = false;
  tempCustomerNo = false;

  validationCheck() {
    if (!this.customer.FName) {
      this.tempFName = true;
    }
    else {
      this.tempFName = false;
    }
    if (!this.customer.LName) {
      this.tempLName = true;
    }
    else {
      this.tempLName = false;
    }
    if (!this.customer.Address) {
      this.tempAddress = true;
    }
    else {
      this.tempAddress = false;
    }
    if (!this.customer.ZipCode) {
      this.tempZipCode = true;
    }
    else {
      this.tempZipCode = false;
    }
    if (!this.customer.City) {
      this.tempCity = true;
    }
    else {
      this.tempCity = false;
    }
    if (!this.customer.Country) {
      this.tempCountry = true;
    }
    else {
      this.tempCountry = false;
    }
    if (!this.customer.Email) {
      this.tempEmail = true;
    }
    else {
      this.tempEmail = false;
    }
    if (!this.customer.CustomerNo) {
      this.tempCustomerNo = true;
    }
    else {
      this.tempCustomerNo = false;
    }
  }
  addCustomer() {

    this.validationCheck();

    if (!this.tempFName && !this.tempLName && !this.tempAddress && !this.tempZipCode && !this.tempCity && !this.tempCountry && !this.tempEmail && !this.tempCustomerNo) {
      var val = {
        Id: this.customer.Id,
        CustomerName: this.customer.FName + ' ' + this.customer.LName,
        FName: this.customer.FName,
        LName: this.customer.LName,
        Address: this.customer.Address,
        ZipCode: this.customer.ZipCode,
        City: this.customer.City,
        Country: this.customer.Country,
        Email: this.customer.Email,
        CustomerNo: this.customer.CustomerNo,
        CreatedBy: 1,
        UpdatedBy: 1,
      };
      this.service.addCustomer(val).subscribe(res => {
        this.toastr.success(res.toString(), '', {
          timeOut: 3000,
        });
      });
    }
    else {
      return false;
    }


  }
  editCustomer() {

    this.validationCheck();
    if (!this.tempFName && !this.tempLName && !this.tempAddress && !this.tempZipCode && !this.tempCity && !this.tempCountry && !this.tempEmail && !this.tempCustomerNo) {
      var val = {
        Id: this.customer.Id,
        FName: this.customer.FName,
        LName: this.customer.LName,
        CustomerName: this.customer.FName + ' ' + this.customer.LName,
        Address: this.customer.Address,
        ZipCode: this.customer.ZipCode,
        City: this.customer.City,
        Country: this.customer.Country,
        Email: this.customer.Email,
        CustomerNo: this.customer.CustomerNo,
        CreatedBy: 1,
        UpdatedBy: 1,
      };


      this.service.editCustomer(val).subscribe(res => {
        this.toastr.success(res.toString(), '', {
          timeOut: 3000,
        });
      });
    } else {
      return false;
    }

  }

}