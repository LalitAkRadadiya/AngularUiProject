import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-dealer',
  templateUrl: './add-edit-dealer.component.html',
  styleUrls: ['./add-edit-dealer.component.css']
})
export class AddEditDealerComponent implements OnInit {

  constructor(private service:SharedService,private toastr: ToastrService) { }
  
  @Input() dealer: any;
  Id:Number = 0;
  DealerName !: string;
  DealerNo!: Number;
  isActive!: string;
  Website!: string;
  PhoneNo!: Number;
  Email!: string;
  Latitude!: Number;
  Longitude!: Number
  isOnline!: string;
  Address!: string;



  ngOnInit(): void {
    if(this.dealer == undefined)
    {
      this.dealer = {};
      this.dealer.DealerName = "";
    }
    // this.DealerName = this.dealer.DealerName;
    console.log(this.dealer);
  }

  
  addDealer() {
    if(this.dealer){
      
        var val = {
          Id: this.dealer.Id,
          DealerName : this.dealer.DealerName,
          DealerNo: this.dealer.DealerNo,
          isActive: this.dealer.isActive,
          Website: this.dealer.Website,
          PhoneNo: this.dealer.PhoneNo,
          Email: this.dealer.Email,
          Latitude: this.dealer.Latitude,
          Longitude: this.dealer.Longitude,
          isOnline: this.dealer.isOnline,
          Address: this.dealer.Address,
          CreatedBy: 1,
          UpdatedBy: 1,
        };
        this.service.addDealer(val).subscribe(res=>{
          this.toastr.success(res.toString());
        });
    }
   
  }
  editDealer() {

      console.log('ddd',this.dealer);
      var val = {
      Id: this.dealer.Id,
      DealerName : this.dealer.DealerName,
      DealerNo: this.dealer.DealerNo,
      isActive: this.dealer.isActive,
      Website: this.dealer.Website,
      PhoneNo: this.dealer.PhoneNo,
      Email: this.dealer.Email,
      Latitude: this.dealer.Latitude,
      Longitude: this.dealer.Longitude,
      isOnline: this.dealer.isOnline,
      Address: this.dealer.Address,
      CreatedBy: 1,
      UpdatedBy: 1,
    };
    
   
    
    console.log('val',val)
    this.service.editDealer(val).subscribe(res=>{
    this.toastr.success(res.toString());
    });
  }

}
