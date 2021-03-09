import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-edit-service',
  templateUrl: './add-edit-service.component.html',
  styleUrls: ['./add-edit-service.component.css']
})
export class AddEditServiceComponent implements OnInit {

  constructor(private service:SharedService,private toastr: ToastrService) { }

  DealerList : any= [];
  @Input() services:any;
  Id:Number = 0;
  Name!:string;
  Price!:Number;
  FixPrice!:Number;
  Discount!:Number;
  Description!:string;
  CreatedBy!:string;
  UpdateBy!:string;
  DealerId! : number;
  CostType! : string;
  PricePerUnit! : Number;
  SalesPart ! : string; 

  loadDealerList(){
    this.service.dealerDropdown().subscribe(data=>{
      console.log('load',data);
      this.DealerList = data;
    });
  }
  ngOnInit(): void {
    this.loadDealerList();
    if(this.services != null && this.services != undefined){
      this.Id=this.services.Id;
      this.Name=this.services.Name;
      this.Price=this.services.Price;
      this.FixPrice=this.services.FixPrice;
      this.Discount=this.services.Discount;
      this.Description=this.services.Description;
      this.DealerId = this.DealerId;
      this.CostType = this.CostType;
      this.PricePerUnit= this.PricePerUnit;
      this.SalesPart = this.SalesPart;
        }
        console.log(this.services);
  }
  sericeName = false;
  servicePrice = false;
  servicefixprice = false;
  serviceDiscount = false;
  serviceDescription = false;
  serviceDealerId  = false;
  serviceSalesPart = false;
  servicePricePerUnit = false;
  serviceCosttype = false;
  addService(){
    
  
  if(!this.sericeName && !this.servicePrice && !this.servicefixprice && !this.serviceDiscount && !this.serviceDescription && !this.serviceDealerId && !this.serviceSalesPart && !this.servicePricePerUnit && !this.serviceCosttype ){
    this.sericeName = true;
    this.servicePrice = true;
    this.servicefixprice = true;
    this.serviceDiscount = true;
    this.serviceDescription = true;
    this.serviceDealerId  = true;
    this.serviceSalesPart = true;
    this.servicePricePerUnit = true;
    this.serviceCosttype = true;
      return false;
    }
    var val={Id:this.Id,
            Name:this.services.Name,
            Price:this.services.Price,
            FixPrice:this.services.FixPrice,
            Discount:this.services.Discount,
            Description:this.services.Description,
            CreatedBy:1,
            UpdatedBy:1,
            DealerId:this.DealerId,
            SalesPart : this.services.SalesPart,
            PricePerUnit: this.services.PricePerUnit,
            CostType: this.services.CostType
          };
          // val['Description']=this.Description;
            this.service.addService(val).subscribe(res=>{
              this.toastr.success(res.toString(),'', {
                timeOut: 3000,
              });
            });
  }
        editService(){
          var val={Id:this.Id,
            Name:this.services.Name,
            Price:this.services.Price,
            FixPrice:this.services.FixPrice,
            Discount:this.services.Discount,
            Description:this.services.Description,
            CreatedBy:1,
            UpdatedBy:1,
            SalesPart : this.services.SalesPart,
            PricePerUnit: this.services.PricePerUnit,
            CostType: this.services.CostType
          };
              this.service.editService(val).subscribe(res=>{
              this.toastr.success(res.toString(),'', {
                timeOut: 3000,
              });
                        });
            }
    }