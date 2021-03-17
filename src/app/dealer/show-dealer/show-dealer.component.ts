import { Component, OnInit, Input } from '@angular/core';

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
       

  @Input() isAscending: boolean = true
  @Input() sortedColumn: string = '';


  sortMaterialData(columnName: string, isIgnoreDirectionCheck: boolean = false) {
    if (!isIgnoreDirectionCheck) {
      if (this.sortedColumn == columnName) {
        this.isAscending = !this.isAscending;
      }
      else {
        this.sortedColumn = columnName;
        this.isAscending = true;
      }
    }
    let sortOrder = this.isAscending ? 1 : -1;
    this.DealerList = this.DealerList.sort((a: any, b: any) => {
      let val1 = a[columnName];
      let val2 = b[columnName];

      if (val1 == undefined || val1 == null) {
        val1 = '';
      }
      else {
        val1 = val1
      }
      if (val2 == undefined || val1 == null) {
        val2 = '';
      }
      else {
        val2 = val2
      }
      let result = (val1 < val2) ? -1 : (val1 > val2) ? 1 : 0;

      return result * sortOrder;
    });
  }
  
}
