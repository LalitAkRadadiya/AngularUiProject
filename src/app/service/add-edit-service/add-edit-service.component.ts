import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-service',
  templateUrl: './add-edit-service.component.html',
  styleUrls: ['./add-edit-service.component.css']
})
export class AddEditServiceComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() services:any;
  Id:Number = 0;
  ServiceName!:string;
  Price!:Number;
  FixPrice!:Number;
  Discount!:Number;
  Description!:string;
  CreatedBy!:string;
  UpdateBy!:string;



  ngOnInit(): void {
    if(this.services != null && this.services != undefined){
      this.Id=this.services.Id;
      this.ServiceName=this.services.ServiceName;
      this.Price=this.services.Price;
      this.FixPrice=this.services.FixPrice;
      this.Discount=this.services.Discount;
      this.Description=this.services.Description;
        }

  }
  addService(){
 
    var val={Id:this.Id,
            ServiceName:this.ServiceName,
            Price:this.Price,
            FixPrice:this.FixPrice,
            Discount:this.Discount,
            Description:this.Description,
            CreatedBy:1,
            UpdatedBy:1,
          };
            this.service.addService(val).subscribe(res=>{
              alert(res.toString());
            });
  }
        editService(){
          var val={Id:this.Id,
            ServiceName:this.ServiceName,
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