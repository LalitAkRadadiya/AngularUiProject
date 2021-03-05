import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-service',
  templateUrl: './add-edit-service.component.html',
  styleUrls: ['./add-edit-service.component.css']
})
export class AddEditServiceComponent implements OnInit {

  constructor(private service:SharedService) { }

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
        }
        console.log(this.services);
  }
  addService(){
 
    var val={Id:this.Id,
            Name:this.services.Name,
            Price:this.services.Price,
            FixPrice:this.services.FixPrice,
            Discount:this.services.Discount,
            Description:this.services.Description,
            CreatedBy:1,
            UpdatedBy:1,
            DealerId:this.DealerId
          };
          val['Name']="lalit";
          // val['Description']=this.Description;
            this.service.addService(val).subscribe(res=>{
              alert(res.toString());
            });
  }
        editService(){
          var val={Id:this.Id,
            Name:this.Name,
            Price:this.Price,
            FixPrice:this.FixPrice,
            Discount:this.Discount,
            Description:this.Description,
            CreatedBy:1,
            UpdatedBy:1,
          };
              this.service.editService(val).subscribe(res=>{
              alert(res.toString());
                        });
            }
    }