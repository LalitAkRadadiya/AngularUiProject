import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import {SharedService} from './shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(service : SharedService){

  }
  get getloader(){
    return this.loader;
  }

  hidemenu=false;
  

  
  loader = "";

  // refreshAppoinmentList() {
     
  //   this.loader = this.service.showLoadeer();
  //    this.service.getAppointmentList().subscribe(data => {
  //     setTimeout(() => {
        
  //     this.AppointmentList = data;


  //     this.loader =  this.service.hideLoader();
  //     }, );
  //   }
  //   );
     
  // }

  title = 'ProjectUI';
   ngOnInit() {
     let url = (window.location.href).toString();
    console.log("log",window.location.href);
    if(url.includes("tracking")){
      console.log('tra');
      this.hidemenu=true;
    }else{
      console.log('fail')
      this.hidemenu=false;
    }
                //Toggle Click Function
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
}
