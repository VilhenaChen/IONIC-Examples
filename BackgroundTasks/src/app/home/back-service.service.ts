import { File } from '@ionic-native/file/ngx';

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BackService {

  
  
  private lowestNbr : number;
  private highestNbr : number;
  private lowest : BehaviorSubject<number>;
  private highest : BehaviorSubject<number>;
  private stop : boolean;
  private primeiro : boolean;
  constructor(/*private file : File*/) { 
    console.log('inicio');                                                                                                                      
    this.lowestNbr = 10000;
    this.highestNbr = 99999;
    this.lowest = new BehaviorSubject<number>(this.lowestNbr);
    this.highest = new BehaviorSubject<number>(this.highestNbr);
    this.stop = true;
    this.primeiro = true;
  }

  async start()
  {
    while(this.stop == false){
      const loadNumeros = async() =>{
        const response = await fetch('./assets/numeros.json');
        const json = await response.json();
        this.lowestNbr = json['lowest'];
        this.highestNbr = json['highest'];
        this.lowest.next(this.lowestNbr);
        this.highest.next(this.highestNbr);
        console.log('a');
      }
      console.log( );
      
      if(this.primeiro == true){
      await loadNumeros();
      this.primeiro = false;}
      await this.delay(10000);
      
      this.lowestNbr++;
      this.highestNbr--;
      this.lowest.next(this.lowestNbr);
      this.highest.next(this.highestNbr);
      //this.file.writeFile(this.file.externalApplicationStorageDirectory,'numeros2.json',JSON.stringify({'lowest' : this.lowestNbr, 'highest': this.highestNbr} ),{replace:true});
      //this.file.writeFile('./','numeros2.json',JSON.stringify({'lowest' : this.lowestNbr, 'highest': this.highestNbr} ),{replace:true});
      console.log('ta');
      
    }
  }

  delay(milisegundos:number) {
    console.log("oi");
    return new Promise(resolve=>{setTimeout(resolve,milisegundos);});
  }

  getLowest() : Observable<number>{
    return this.lowest.asObservable();
  }

  getHighest(): Observable<number>{
    return this.highest.asObservable();
  }

  setStop(status: boolean){
    this.stop = status;
  }
}
