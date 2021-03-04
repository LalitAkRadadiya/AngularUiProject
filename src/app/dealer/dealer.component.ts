import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit {

  constructor(private service:SharedService) { }

  DealerList:any = [];

  ModalTitle!:string;
  ActivateAddEditDealerComp:boolean=true;
  ActivateAddEditVehicleComp:boolean=true;
  dealer:any;
  vehicle:any;


  ngOnInit(): void {
    this.refreshDealerList();
  }

  addDealerClick(){
    this.dealer={
      Id:0
    }
    this.ModalTitle="Add Dealer";
    this.ActivateAddEditDealerComp=true;
  }


  editDealerClick(){
    // this.dealer=item
    this.ModalTitle = "Edit Dealer"
    this.ActivateAddEditDealerComp=true;
  }


  deleteDealer(item:any){
    console.log('id>',item.Id);
      this.service.deleteDealer(item.Id).subscribe(data=>{
        alert(data.toString());
        this.refreshDealerList();
      });
  }

  

  displayVehicles(item:Number){
    
  }
  refreshDealerList(){
    this.service.getDealerList().subscribe(data=>{
    this.DealerList=data;
    console.log('dealer',this.DealerList);
        }
      );
    }
  
}
