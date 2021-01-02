import { BackService } from './back-service.service';
import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { Toast } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  first : number;
  second : number;
  constructor(/*private file: File*/private backService:BackService) {}

  ngOnInit(){
    this.backService.getFirst().subscribe((value)=>{this.first=value});
    this.backService.getSecond().subscribe((value)=>{this.second=value});
  }

  onStart(){
    this.backService.setStop(false);
    this.backService.start();
  }

  onStop(){
    this.backService.setStop(true);
  }
  




}
