import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-show-dealer',
  templateUrl: './show-dealer.component.html',
  styleUrls: ['./show-dealer.component.css']
})
export class ShowDealerComponent implements OnInit {

 
  ActivateAddEditDealerComp:boolean=false;
  
  constructor(private service:SharedService,private toastr: ToastrService, private spinner: NgxSpinnerService) { }
  dealer:any;
  DealerList:any = [];

  ModalTitle!:string;

  ngOnInit(): void {
    this.refreshDealerList();
    setTimeout(() => {
      //init Datatable
      $('#filterListTable').DataTable(
        {
          "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]],
          stateSave: true,
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
  if(confirm("Are You Sure? Want to Delete?")){
    this.service.deleteDealer(item.Id).subscribe(data=>{
      // this.toastr.success(data.toString(),'', {           timeOut: 2000,         });
      this.toastr.success(data.toString(),'', {           timeOut: 2000,         });
      this.refreshDealerList();
    });
    this.refreshDealerList();
  }
      
  }

  
  refreshDealerList(){
    this.spinner.show();
    this.service.getDealerList().subscribe(data => {
       
     this.DealerList = data;
this.spinner.hide();

   }
   );
    }
  
}
