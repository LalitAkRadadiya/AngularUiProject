import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dealer',
  templateUrl: './show-dealer.component.html',
  styleUrls: ['./show-dealer.component.css']
})
export class ShowDealerComponent implements OnInit {

 
  isEdit = false;
  constructor(private service:SharedService) { }

  DealerList:any = [];

  ModalTitle!:string;
  dealermain:any;


  ngOnInit(): void {
    this.refreshDealerList();
  }

  addDealerClick(){
    this.dealermain={
      Id:0
    }
    this.ModalTitle="Add Dealer";
    this.isEdit = true;
  }


  editDealerClick(item : any){
    console.log('ddd',item);
    this.dealermain=item;
    this.ModalTitle = "Edit Dealer";
    this.isEdit = true;
  }


  deleteDealer(item:any){
    console.log('id>',item.Id);
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
