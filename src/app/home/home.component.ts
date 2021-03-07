import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
 
  images = [533, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(config: NgbCarouselConfig,private titleService:Title) { 
    config.interval = 100;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    this.titleService.setTitle("Home");
  }

  ngOnInit(): void {
    
  }
  

}
