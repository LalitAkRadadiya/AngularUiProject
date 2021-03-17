import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
 

@Component({
  selector: 'app-show-service',
  templateUrl: './show-service.component.html',
  styleUrls: ['./show-service.component.css']
})
export class ShowServiceComponent implements OnInit {

  constructor(private service: SharedService, private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  ServiceList: any = [];

  ModalTitle!: string;
  ActivateAddEditServiceComp: boolean = false;
  services: any;
  async  ngOnInit() {


    this.refreshServiceList();
    
    // setTimeout(() => {
    //   //init Datatable
      
     
    //   $('#filterListTable').DataTable(
    //     {
    //       "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]],
    //       stateSave: true,
    //     }
    //   );
      
    // }, 5000);
  }
  addClick() {
    this.services = {
      Id: 0
    }
    this.ModalTitle = "Add Service";
    this.ActivateAddEditServiceComp = true;
  }
  editClick(item: any) {
    this.services = item;
    console.log('dealer id',this.services);
    this.ModalTitle = "Edit Service";
    this.ActivateAddEditServiceComp = true;
  }
  closeClick() {
    this.ActivateAddEditServiceComp = false;
    this.refreshServiceList();
  }
  deleteClick(item: any) {
    if (confirm('Are You Sure? Want to Delete?')) {
      this.service.deleteService(item.Id).subscribe(data => {
        this.toastr.success(data.toString(),'', {
          timeOut: 2000,
        });
        this.refreshServiceList();
      });
    }
    
  }
  
   refreshServiceList() {
    this.spinner.show();
    this.service.getServiceList().subscribe(data => {
   
      this.ServiceList = data;
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
    this.ServiceList = this.ServiceList.sort((a: any, b: any) => {
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
