import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent implements OnInit {

  constructor() { }

  @Input() appoinment:any;

  ngOnInit(): void {
    
  }

}
