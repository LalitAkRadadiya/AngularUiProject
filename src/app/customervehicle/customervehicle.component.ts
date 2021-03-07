import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-customervehicle',
  templateUrl: './customervehicle.component.html',
  styleUrls: ['./customervehicle.component.css']
})
export class CustomervehicleComponent implements OnInit {

  constructor(private titleService:Title) { 
    this.titleService.setTitle("Customer");

  }

  ngOnInit(): void {
  }

}
