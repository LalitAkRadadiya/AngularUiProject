import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dealer',
  templateUrl: './show-dealer.component.html',
  styleUrls: ['./show-dealer.component.css']
})
export class ShowDealerComponent implements OnInit {

 
  ActivateAddEditDealerComp:boolean=false;
  
  constructor(private service:SharedService) { }
  dealer:any;
  DealerList:any = [];

  ModalTitle!:string;

  ngOnInit(): void {
    this.refreshDealerList();
  }

  addDealerClick(){
    
    this.dealer = undefined;
    this.dealer={
      Id:0
    }
    this.ModalTitle="Add Dealer";
    this.ActivateAddEditDealerComp=true;
  }


  editDealerClick(item : any){
    console.log('ddd',item);
    this.dealer=item;
    this.ModalTitle = "Edit Dealer";
    
    
    this.ActivateAddEditDealerComp=true;
  }

  closeClick(){
    this.ActivateAddEditDealerComp=false;
    this.refreshDealerList();
  }
  deleteDealer(item:any){
    console.log('id',item.Id);
      this.service.deleteDealer(item.Id).subscribe(data=>{
        alert(data.toString());
        this.refreshDealerList();
      });
  }

  
  refreshDealerList(){
    this.service.getDealerList().subscribe(data=>{
          this.DealerList=data;
        }
      );
    }
  
}
