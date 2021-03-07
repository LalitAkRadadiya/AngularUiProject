import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-dealer',
  templateUrl: './show-dealer.component.html',
  styleUrls: ['./show-dealer.component.css']
})
export class ShowDealerComponent implements OnInit {

 
  ActivateAddEditDealerComp:boolean=false;
  
  constructor(private service:SharedService,private toastr: ToastrService) { }
  dealer:any;
  DealerList:any = [];

  ModalTitle!:string;

  ngOnInit(): void {
    this.refreshDealerList();
    setTimeout(() => {
      //init Datatable
      $('#filterListTable').DataTable(
      {
      "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]]
      }
      );
      }, 5000);
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
        // this.toastr.success(data.toString());
        this.toastr.success(data.toString());
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
