import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Service");
  }

  ngOnInit(): void {
  }
}
