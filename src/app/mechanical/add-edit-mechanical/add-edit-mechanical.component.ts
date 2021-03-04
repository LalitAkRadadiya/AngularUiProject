import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-mechanical',
  templateUrl: './add-edit-mechanical.component.html',
  styleUrls: ['./add-edit-mechanical.component.css']
})
export class AddEditMechanicalComponent implements OnInit {

  constructor(private service:SharedService) { }
  
  @Input() Mechanic: any;
  ngOnInit(): void {
  }

  
  addMechanic() {
    
    var val = {
      Id: this.Mechanic.Id,
      MechanicName : this.Mechanic.MechanicName,
      EmployeeNo: this.Mechanic.EmployeeNo,
      isActive: this.Mechanic.isActive,
      EmailId: this.Mechanic.EmailId,
      MobileNo: this.Mechanic.MobileNo,
      DealerId: this.Mechanic.DealerId,
      
    };
    this.service.addMechanic(val).subscribe(res=>{
      alert(res.toString());
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
      DealerId: this.Mechanic.DealerId,
      
    };
    
   
    
    console.log('val',val)
    this.service.editMechanic(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
