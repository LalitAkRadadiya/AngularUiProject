import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit {

  constructor(private service:SharedService,private toastr: ToastrService) { }

  @Input() customer: any;


  ngOnInit(): void {
    
     
  }

  addCustomer() {
    
    var val = {
      Id: this.customer.Id,
      CustomerName : this.customer.FName+ ' ' + this.customer.LName,
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
    this.service.addCustomer(val).subscribe(res=>{
      this.toastr.success(res.toString(),'', {
        timeOut: 3000,
      });
    });
  }
  editCustomer() {
    var val = {
      Id: this.customer.Id,
      FName: this.customer.FName,
      LName: this.customer.LName,
      CustomerName : this.customer.FName+ ' ' + this.customer.LName,
      Address: this.customer.Address,
      ZipCode: this.customer.ZipCode,
      City: this.customer.City,
      Country: this.customer.Country,
      Email: this.customer.Email,
      CustomerNo: this.customer.CustomerNo,
      CreatedBy: 1,
      UpdatedBy: 1,
    };
    
   
    this.service.editCustomer(val).subscribe(res=>{
    this.toastr.success(res.toString(),'', {
      timeOut: 3000,
    });
    });
  }

}
