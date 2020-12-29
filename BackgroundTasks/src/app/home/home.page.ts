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

  lowest : number;
  highest : number;
  constructor(/*private file: File*/private backService:BackService) {}

  ngOnInit(){
    this.backService.getLowest().subscribe((value)=>{this.lowest=value});
    this.backService.getHighest().subscribe((value)=>{this.highest=value});
  }

  onStart(){
    this.backService.setStop(false);
    this.backService.start();
  }

  onStop(){
    this.backService.setStop(true);
  }
  




}
