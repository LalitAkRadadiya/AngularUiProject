import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-edit-mechanical',
  templateUrl: './add-edit-mechanical.component.html',
  styleUrls: ['./add-edit-mechanical.component.css']
})
export class AddEditMechanicalComponent implements OnInit {

  constructor(private service:SharedService,private toastr: ToastrService) { }
  DealerList : any= [];
  
  @Input() Mechanic: any;
  Id:Number = 0;
  MechanicName!:string;
  EmployeeNo!:Number;
  isActive!:Number;
  EmailId!:string;
  MobileNo!:string;
  DealerId : Number;  
  CreatedBy:1;
  UpdatedBy:1;


  loadDealerList(){
    this.service.dealerDropdown().subscribe(data=>{
      this.DealerList = data;
      console.log('dealer', this.DealerList);
    });
  }
  ngOnInit(): void {
    this.loadDealerList();
  }

  
  addMechanic() {
    
    var val = {
      Id: this.Mechanic.Id,
      MechanicName : this.Mechanic.MechanicName,
      EmployeeNo: this.Mechanic.EmployeeNo,
      isActive: this.Mechanic.isActive,
      EmailId: this.Mechanic.EmailId,
      MobileNo: this.Mechanic.MobileNo,
      DealerId: this.DealerId,
      
    };
    console.log('value112',val);
    this.service.addMechanic(val).subscribe(res=>{
      this.toastr.success(res.toString());
    });
  }
  editMechanic() {

      console.log('ddd',this.Mechanic);
      var val = {
      Id: this.Mechanic.Id,
      MechanicName : this.Mechanic.MechanicName,
      EmployeeNo: this.Mechanic.EmployeeNo,
      isActive: this.Mechanic.isActive,
      EmailId: this.Mechanic.EmailId,
      MobileNo: this.Mechanic.MobileNo,
      DealerId: this.DealerId,
      
    };
    
   
    
    console.log('val',val)
    this.service.editMechanic(val).subscribe(res=>{
    this.toastr.success(res.toString());
    });
  }
}
