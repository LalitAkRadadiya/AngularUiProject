import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit {
  isEdit = false;
  constructor(private service:SharedService,private toastr: ToastrService,private titleService:Title) { 
    this.titleService.setTitle("Dealer");
  }

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
        this.toastr.success(data.toString());
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
