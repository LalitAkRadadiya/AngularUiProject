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

  tempMechanicName= false;
  tempEmployeeNo= false;
  tempMobileNo= false;
  tempEmailId= false;
  tempisActive= false;
  tempDealerId= false;
  addMechanic() {
    if(!this.Mechanic.MechanicName){
      this.tempMechanicName = true;
    }else{
      this.tempMechanicName= false;
    }
    if(!this.Mechanic.EmployeeNo){
      this.tempEmployeeNo = true;
    }else{
      this.tempEmployeeNo= false;
    }
    if(!this.Mechanic.isActive){
      this.tempisActive= true;
    }else{
      this.tempisActive= false;
    }
    if(!this.Mechanic.EmailId){
      this.tempEmailId = true;
    }else{
      this.tempEmailId = false;
    }
    if(!this.Mechanic.MobileNo){
      this.tempMobileNo= true;
    }else{
      this.tempMobileNo= false;
    }
    if(!this.DealerId){
      this.tempDealerId = true;
    }else{
      this.tempDealerId = false;
    }

    if(!this.tempDealerId && !this.tempEmailId && !this.tempEmployeeNo && !this.tempMechanicName && !this.tempMobileNo && !this.tempisActive){

              var val = {
                Id: this.Mechanic.Id,
                MechanicName : this.Mechanic.MechanicName,
                EmployeeNo: this.Mechanic.EmployeeNo,
                isActive: this.Mechanic.isActive,
                EmailId: this.Mechanic.EmailId,
                MobileNo: this.Mechanic.MobileNo,
                DealerId: this.DealerId,
                
              };
              if(val.isActive != true){
                val['isActive'] = false; 
              }
              this.service.addMechanic(val).subscribe(res=>{
                this.toastr.success(res.toString(),'', {
                  timeOut: 3000,
                });
              });
    }else{
      return false;
    }
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
    this.toastr.success(res.toString(),'', {
      timeOut: 3000,
    });
    });
  }
}
