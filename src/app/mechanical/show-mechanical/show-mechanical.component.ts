import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-mechanical',
  templateUrl: './show-mechanical.component.html',
  styleUrls: ['./show-mechanical.component.css']
})
export class ShowMechanicalComponent implements OnInit {

  

  ActivateAddEditMechanicComp:boolean=false;
  
  constructor(private service:SharedService) { }
  mechanic:any;
  MechanicList:any = [];

  ModalTitle!:string;
  mechanicmain:any;


  ngOnInit(): void {
    this.refreshMechanicList();
  }

  addMechanicClick(){
    this.mechanic={
      Id:0
    }
    this.ModalTitle="Add Mechanic";
  
    
    this.ActivateAddEditMechanicComp=true;
  }


  editMechanicClick(item : any){
    console.log('ddd',item);
    this.mechanic=item;
    this.ModalTitle = "Edit Mechanic";
    
    
    this.ActivateAddEditMechanicComp=true;
  }

  closeClick(){
    this.ActivateAddEditMechanicComp=false;
    this.refreshMechanicList();
  }
  deleteMechanic(item:any){
    console.log('id',item.Id);
      this.service.deleteMechanic(item.Id).subscribe(data=>{
        alert(data.toString());
        this.refreshMechanicList();
      });
  }

  
  refreshMechanicList(){
    this.service.getMechanicList().subscribe(data=>{
          this.MechanicList=data;
        }
      );
    }
 

}
