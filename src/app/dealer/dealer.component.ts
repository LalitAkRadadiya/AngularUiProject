import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit {
  isEdit = false;
  constructor(private service:SharedService) { }

  DealerList:any = [];

  ModalTitle!:string;
  dealer:any;


  ngOnInit(): void {
    this.refreshDealerList();
  }

  addDealerClick(){
    this.dealer={
      Id:0
    }
    this.ModalTitle="Add Dealer";
    this.isEdit = true;
  }


  editDealerClick(item : any){
    this.dealer=item
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
    console.log('dealer',this.DealerList);
        }
      );
    }
  
}
