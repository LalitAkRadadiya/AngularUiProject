import { Component, OnInit } from '@angular/core';
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
    if (confirm('Are You Sure?')) {
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
}
