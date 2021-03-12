import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-dealer',
  templateUrl: './add-edit-dealer.component.html',
  styleUrls: ['./add-edit-dealer.component.css']
})
export class AddEditDealerComponent implements OnInit {

  constructor(private service: SharedService, private toastr: ToastrService) { }

  @Input() dealer: any;
  Id: Number = 0;
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
    if (this.dealer == undefined) {
      this.dealer = {};
      this.dealer.DealerName = "";
    }
    // this.DealerName = this.dealer.DealerName;
    console.log(this.dealer);
  }

  tempDealerName = false;
  tempDealerNo = false;
  tempWebsite = false;
  tempEmail = false;
  tempPhoneNo = false;
  tempAddress = false;
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
  validationCheck() {
    if (!this.dealer.DealerName) {
      this.tempDealerName = true;
    } else {
      this.tempDealerName = false;
    }
    if (!this.dealer.DealerNo) {
      this.tempDealerNo = true;
    } else {
      this.tempDealerNo = false;
    }
    if (!this.dealer.Website) {
      this.tempWebsite = true;
    } else {
      this.tempWebsite = false;
    }
    if (!this.dealer.Email) {
      this.tempEmail = true;
    } else {
      this.tempEmail = false;
    }
    if (!this.dealer.PhoneNo) {
      this.tempPhoneNo = true;
    } else {
      this.tempPhoneNo = false;
    }
    if (!this.dealer.Address) {
      this.tempAddress = true;
    } else {
      this.tempAddress = false;
    }

  }
  addDealer() {


    this.validationCheck();
    if (!this.tempAddress && !this.tempDealerName && !this.tempDealerNo && !this.tempEmail && !this.tempPhoneNo && !this.tempWebsite) {

      if (this.dealer) {

        var val = {
          Id: this.dealer.Id,
          DealerName: this.dealer.DealerName,
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
        if (val.isActive != true) {
          val['isActive'] = false;
        }
        if (val.isOnline != true) {
          val['isOnline'] = false;
        }
        this.service.addDealer(val).subscribe(res => {
          this.toastr.success(res.toString(), '', {
            timeOut: 3000,
          });
        });
      }
    } else {
      return false;
    }

  }
  editDealer() {

    this.validationCheck();
    if (!this.tempAddress && !this.tempDealerName && !this.tempDealerNo && !this.tempEmail && !this.tempPhoneNo && !this.tempWebsite) {
      var val = {
        Id: this.dealer.Id,
        DealerName: this.dealer.DealerName,
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



      console.log('val', val)
      this.service.editDealer(val).subscribe(res => {
        this.toastr.success(res.toString(), '', {
          timeOut: 3000,
        });
      });
    } else {
      return false;
    }


  }

}
