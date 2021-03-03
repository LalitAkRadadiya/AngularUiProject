import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit {

  constructor() { }

  @Input() customer: any;
  Id: Number = 0;
  FName!: string;
  LName!: string;
  Address!: string;
  ZIPCode!: Number;
  City!: string;
  Country!: string;
  Email!: string;
  CustomerNo!: Number;
  CreatedBy!: string;
  UpdateBy!: string;

  ngOnInit(): void {
    if (this.customer != null && this.customer != undefined) {
      this.Id = this.customer.Id;
      this.FName = this.customer.FName;
      this.LName = this.customer.LName;
      this.Address = this.customer.Address;
      this.ZIPCode = this.customer.ZIPCode;
      this.City = this.customer.City;
      this.Country = this.customer.Country;
      this.Email = this.customer.Email;
      this.CustomerNo = this.customer.CustomerNo;
    }
  }

  addCustomer() {

    var val = {
      Id: this.Id,
      FName: this.FName,
      LName: this.LName,
      Address: this.Address,
      ZIPCode: this.ZIPCode,
      City: this.City,
      Country: this.Country,
      Email: this.Email,
      CustomerNo: this.CustomerNo,
      CreatedBy: 1,
      UpdatedBy: 1,
    };
    // this.service.addCustomer(val).subscribe(res=>{
    //   alert(res.toString());
    // });
  }
  editCustomer() {
    var val = {
      Id: this.Id,
      FName: this.FName,
      LName: this.LName,
      Address: this.Address,
      ZIPCode: this.ZIPCode,
      City: this.City,
      Country: this.Country,
      Email: this.Email,
      CustomerNo: this.CustomerNo,
      CreatedBy: 1,
      UpdatedBy: 1,
    };
    // this.service.editCustomer(val).subscribe(res=>{
    // alert(res.toString());
    //           });
  }

}
