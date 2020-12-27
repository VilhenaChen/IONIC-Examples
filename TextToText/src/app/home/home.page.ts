import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  input:string;
  output:string;

  constructor() {
    
  }

  onClick() {
    this.output = this.input;
  }

}
