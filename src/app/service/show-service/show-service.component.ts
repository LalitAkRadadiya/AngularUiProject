import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-service',
  templateUrl: './show-service.component.html',
  styleUrls: ['./show-service.component.css']
})
export class ShowServiceComponent implements OnInit {

  constructor(private service:SharedService) { }

  ServiceList:any=[];

  ModalTitle!:string;
  ActivateAddEditServiceComp:boolean=true;
  services:any;
  ngOnInit(): void {
    this.refreshServiceList();
  }
  addClick(){
    this.services={
      Id:0
    }
    this.ModalTitle="Add Service";
    this.ActivateAddEditServiceComp=true;
  }
  editClick(item:any){
    this.services=item
    this.ModalTitle="Edit Service";
    this.ActivateAddEditServiceComp=true;
  }
  closeClick(){
    this.ActivateAddEditServiceComp=false;
    this.refreshServiceList();
  }
  deleteClick(item:any){
    if(confirm('Are You Sure?')){
      this.service.deleteService(item.Id).subscribe(data=>{
        alert(data.toString());
        this.refreshServiceList();
      });
    }
  }
    refreshServiceList(){
      this.service.getServiceList().subscribe(data=>{
     
      this.ServiceList=data;
          }
        );
        }
  }
