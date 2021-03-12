import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

import { ToastrService } from 'ngx-toastr';
import { VirtualTimeScheduler } from 'rxjs';
@Component({
  selector: 'app-add-edit-service',
  templateUrl: './add-edit-service.component.html',
  styleUrls: ['./add-edit-service.component.css']
})
export class AddEditServiceComponent implements OnInit {

  constructor(private service: SharedService, private toastr: ToastrService) { }
  
  DealerList: any = [];
  @Input() services: any;
  Id: Number = 0;
  Name!: string;
  Price!: Number;
  FixPrice!: Number;
  Discount!: Number;
  Description!: string;
  Quantity!: string;
  CreatedBy!: string;
  UpdateBy!: string;
  DealerId!: number;
  CostType!: string;
  // PricePerUnit!: Number;
  SalesPart !: string;

  loadDealerList() {
    this.service.dealerDropdown().subscribe(data => {
      console.log('load', data);
      this.DealerList = data;
    });
  }
  
  ngOnInit(): void {
    console.log('sertgthfhf',this.services.Id);
    this.loadDealerList();
   

    if (this.services != null && this.services != undefined) {
      this.Id = this.services.Id;
      this.Name = this.services.Name;
      this.Price = this.services.Price;
      this.FixPrice = this.services.FixPrice;
      this.Discount = this.services.Discount;
      this.Description = this.services.Description;
      this.DealerId = this.DealerId;
      this.CostType = this.services.CostType;
      this.Quantity = this.services.Quantity;
      // this.PricePerUnit = this.services.PricePerUnit;
      this.SalesPart = this.services.SalesPart;
     
    }
    console.log(this.services);
  }
  serviceDealer = false;
  sericeName = false;
  servicePrice = false;
  servicefixprice = false;
  serviceDiscount = false;
  serviceDescription = false;
  serviceDealerId = false;
  serviceSalesPart = false;
  // servicePricePerUnit = false;
  serviceCosttype = false;
  serviceQuantity= false;

validationCheck(){
  if (!this.services.Name) {
    this.sericeName = true;
  } else {
    this.sericeName = false;
  }
  if (!this.services.Price) {
    this.servicePrice = true;
  } else {
    this.servicePrice = false;
  }
  if (!this.services.FixPrice) {
    this.servicefixprice = true;
  } else {
    this.servicefixprice = false;
  }
  if (!this.services.Discount) {
    this.serviceDiscount = true;
  } else {
    this.serviceDiscount = false;
  }
  if (!this.services.Description) {
    this.serviceDescription = true;
  } else {
    this.serviceDescription = false;
  }
  if (!this.services.CostType) {
    this.serviceCosttype = true;
  } else {
    this.serviceCosttype = false;
  }
  if (!this.services.SalesPart) {
    this.serviceSalesPart = true;
  } else {
    this.serviceSalesPart = false;
  }
  // if (!this.services.PricePerUnit) {
  //   this.servicePricePerUnit = true;
  // } else {
  //   this.servicePricePerUnit = false;
  // }
  if (!this.DealerId) {
    this.serviceDealerId = true;
  } else {
    this.serviceDealerId = false;
  }
  if(!this.services.Quantity){
    this.serviceQuantity= true;
  }else{
    this.serviceQuantity= false;
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
  addService() {

    this.validationCheck();
    if (!this.serviceDealer && !this.serviceQuantity && !this.sericeName && !this.servicePrice && !this.servicefixprice && !this.serviceDiscount && !this.serviceDescription && !this.serviceDealerId && !this.serviceSalesPart  && !this.serviceCosttype) {

      
      var val = {
        Id: this.Id,
        Name: this.services.Name,
        Price: this.services.Price,
        FixPrice: this.services.FixPrice,
        Discount: this.services.Discount,
        Description: this.services.Description,
        CreatedBy: 1,
        UpdatedBy: 1,
        DealerId: this.DealerId,
        Quantity : this.services.Quantity,
        SalesPart: this.services.SalesPart,
        // PricePerUnit: this.services.PricePerUnit,
        CostType: this.services.CostType
      };
      // val['Description']=this.Description;
      console.log('lollol',val)
      this.service.addService(val).subscribe(res => {
        this.toastr.success(res.toString(), '', {
          timeOut: 3000,
        });
      });
      let element: HTMLElement = document.getElementsByClassName('btn-danger')[0] as HTMLElement;
      element.click();
    }else{
      return false;
    }
   
  }
  editService() {
    this.validationCheck();
    if (!this.serviceDealer && !this.serviceQuantity && !this.sericeName && !this.servicePrice && !this.servicefixprice && !this.serviceDiscount && !this.serviceDescription && !this.serviceDealerId && !this.serviceSalesPart && !this.serviceCosttype) {
    
      var val = {
        Id: this.Id,
        Name: this.services.Name,
        Price: this.services.Price,
        FixPrice: this.services.FixPrice,
        Discount: this.services.Discount,
        Description: this.services.Description,
        CreatedBy: 1,
        UpdatedBy: 1,
        SalesPart: this.services.SalesPart,
        Quantity : this.services.Quantity,
        // PricePerUnit: this.services.PricePerUnit,
        CostType: this.services.CostType
      };
      this.service.editService(val).subscribe(res => {
        this.toastr.success(res.toString(), '', {
          timeOut: 3000,
        });
      });
      let element: HTMLElement = document.getElementsByClassName('btn-danger')[0] as HTMLElement;
      element.click();
    }else{
      return false;
    }
  }
}