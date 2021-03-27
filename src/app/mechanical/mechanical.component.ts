import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';

import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-mechanical',
  templateUrl: './mechanical.component.html',
  styleUrls: ['./mechanical.component.css']
})
export class MechanicalComponent implements OnInit {


  ActivateAddEditMechanicComp:boolean=false;
  
  constructor(private service:SharedService,private toastr: ToastrService,private titleService:Title) { 
    this.titleService.setTitle("Mechanic");
  }
  mechanic:any;
  MechanicList:any = [];

  ModalTitle!:string;
  mechanicmain:any;


  ngOnInit(): void {
    this.refreshMechanicList();
  }

  addMechanicClick(){
    this.mechanicmain={
      Id:0
    }
    this.ModalTitle="Add Mechanic";
  
    
    this.ActivateAddEditMechanicComp=true;
  }


  editMechanicClick(item : any){
    this.mechanic=item;
    this.ModalTitle = "Edit Mechanic";
    
    
    this.ActivateAddEditMechanicComp=true;
  }

  closeClick(){
    this.ActivateAddEditMechanicComp=false;
    this.refreshMechanicList();
  }
  deleteMechanic(item:any){
      this.service.deleteMechanic(item.Id).subscribe(data=>{
        this.toastr.success(data.toString(),'', {           timeOut: 2000,         });
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
