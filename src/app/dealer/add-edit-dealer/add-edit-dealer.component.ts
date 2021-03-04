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


  ngOnInit(): void {
    
    console.log('final dealer',this.dealer);
     
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
