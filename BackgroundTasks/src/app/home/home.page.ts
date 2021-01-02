import { BackService } from './back-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  first : number;
  second : number;
  constructor(private backService:BackService) {}

  ngOnInit(){
    this.backService.getFirst().subscribe((value)=>{this.first=value});
    this.backService.getSecond().subscribe((value)=>{this.second=value});
  }

  onStart(){
    if(this.backService.getStop() == true){
      this.backService.setStop(false);
      this.backService.start();
    }
  }

  onStop(){
    this.backService.setStop(true);
  }
  




}
