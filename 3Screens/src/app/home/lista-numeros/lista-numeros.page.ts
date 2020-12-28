import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-numeros',
  templateUrl: './lista-numeros.page.html',
  styleUrls: ['./lista-numeros.page.scss'],
})
export class ListaNumerosPage implements OnInit {
  numbers: number[] = [];
  private current : number = 1;
  private end : number= 1000;
  
  constructor() {
    while(this.current <= this.end){
      this.numbers.push(this.current);
      this.current++;
    }
   }

  ngOnInit() {
  }

}
