import { Component, OnInit,Input } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent implements OnInit {

  constructor(private titleService:Title) { 
    this.titleService.setTitle("Appoinment");
  }

  @Input() appoinment:any;

  ngOnInit(): void {
    
  }

}
