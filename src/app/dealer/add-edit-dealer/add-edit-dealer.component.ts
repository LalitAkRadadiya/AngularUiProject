import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-dealer',
  templateUrl: './add-edit-dealer.component.html',
  styleUrls: ['./add-edit-dealer.component.css']
})
export class AddEditDealerComponent implements OnInit {

  constructor(private service:SharedService) { }
  
  @Input() dealer: any;
  Id!: Number;
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


    if(this.dealer != null && this.dealer != undefined){
        
      this.Id = this.dealer.Id;
      this.DealerName = this.dealer.DealerName;
      this.DealerNo= this.dealer.DealerNo;
      this.isActive= this.dealer.isActive;
      this.Website= this.dealer.Website;
      this.PhoneNo= this.dealer.PhoneNo;
      this.Email= this.dealer.Email;
      this.Latitude= this.dealer.Latitude;
      this.Longitude= this.dealer.Longitude;
      this.isOnline= this.dealer.isOnline;
      this.Address= this.dealer.Address;
    }


    console.log(this.dealer);
  }

  
  addDealer() {
    
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
      alert(res.toString());
    });
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
    alert(res.toString());
    });
  }

}