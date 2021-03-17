import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';
import { AddEditAppoinmentComponent } from './add-edit-appoinment/add-edit-appoinment.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent implements OnInit {



  constructor(private titleService: Title, private service: SharedService, private toastr: ToastrService, private spinner: NgxSpinnerService) {
    this.titleService.setTitle("Appoinment");
  }
  @Input() appoinment: any;

  AppointmentList: any = [];

  ModalTitle!: string;
  ActivateAddEditAppoinmentComp: boolean = false;



  ngOnInit(): void {
    // this.updateAppoinmentStatus();
    this.refreshAppoinmentList();
  
  }
  addClick() {
    this.appoinment = {
      Id: 0
    }
    this.appoinment = {
      Id: 0,
      FName: "",
      LName: "",
      MobileNo: "",
      EMailID: "",
      City: "",
      Country: "",
      Model: "",
      Brand: "",
      Status: "",
      StartDate: "",
      EndDate: "",
      TotalTime: "",
      TotalPrice: "",

    }
    this.ModalTitle = "Add Appoinment";
    this.ActivateAddEditAppoinmentComp = true;

  }

  editClick(item: any) {

    this.ActivateAddEditAppoinmentComp = false;
    this.appoinment = [];
    this.appoinment = item;

    console.log('curent ap', this.appoinment);
    this.ModalTitle = "Edit Appoinment";
    this.ActivateAddEditAppoinmentComp = true;
    // this.AppointmentServiceList(this.appoinment.Id);
    // this.planningList(this.appoinment.Id);

  }
  closeClick() {
    this.ActivateAddEditAppoinmentComp = false;
    this.refreshAppoinmentList();
  }

  deleteClick(item: any) {
    if (confirm('Are You Sure? Want to Delete?')) {
      this.service.deleteAppoinment(item.Id).subscribe(data => {
        this.toastr.success(data.toString(), '', { timeOut: 2000, });
        this.refreshAppoinmentList();
      });
    }
    this.refreshAppoinmentList();

  }


  refreshAppoinmentList() {

    this.spinner.show();
    this.service.getAppointmentList().subscribe(data => {

      this.AppointmentList = data;
      console.log(this.AppointmentList)
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
    this.AppointmentList = this.AppointmentList.sort((a: any, b: any) => {
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
