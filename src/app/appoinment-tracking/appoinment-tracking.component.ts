import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { SharedService } from 'src/app/shared.service'
@Component({
  selector: 'app-appoinment-tracking',
  templateUrl: './appoinment-tracking.component.html',
  styleUrls: ['./appoinment-tracking.component.css']
})
export class AppoinmentTrackingComponent implements OnInit {

  id: any;
  counts: any[] = ["Pending", "Confirm", "Started","Work Done", "Finished"];
  orderStatus: any = "Pending";
  appoinmentData: any;
  constructor(private service: SharedService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    
    this.id = this.router.snapshot.params.id;
    console.log('id',this.id)


    if (this.id > 0) {
      this.service.getAppointmentById(this.id).subscribe(res => {    
        this.appoinmentData = res;
        this.orderStatus = this.appoinmentData.Status;
        console.log(this.appoinmentData);
      });
    }
  }
}
