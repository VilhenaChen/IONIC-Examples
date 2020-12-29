import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackService {

  private lowest : BehaviorSubject<number>;
  private highest : BehaviorSubject<number>;
  private lowestNbr : number;
  private highestNbr : number;
  private stop : boolean;
  constructor() { 
    this.lowestNbr = 10000;
    this.highestNbr = 99999;
    this.lowest = new BehaviorSubject<number>(this.lowestNbr);
    this.highest = new BehaviorSubject<number>(this.highestNbr);
    this.stop = true;
  }

  start()
  {
    //while(this.stop == false){
    this.lowestNbr++;
    this.highestNbr--;
    this.lowest.next(this.lowestNbr);
    this.highest.next(this.highestNbr);
    //this.delay(10000);}
  }

  delay(milisegundos:number) {
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
