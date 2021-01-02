//import { File } from '@ionic-native/file/ngx';

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {Plugins, FilesystemDirectory, FilesystemEncoding} from '@capacitor/core'

const{Filesystem} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class BackService {

  private firstNbr : number;
  private secondNbr : number;
  private maxRand : number = 99999;
  private minRand : number = 10000;
  private first : BehaviorSubject<number>;
  private second : BehaviorSubject<number>;
  private stop : boolean;
  private numeros : string[];
  private leu: boolean = true;


  constructor() {                                                                                                                     
    this.firstNbr = 0;
    this.secondNbr = 0;
    this.first = new BehaviorSubject<number>(this.firstNbr);
    this.second = new BehaviorSubject<number>(this.secondNbr);
    this.stop = true;
  }

  async start()
  {
    while(this.stop == false){
      
      this.leu=true;
      try{
        let contents = await Filesystem.readFile({
          path: 'numeros.txt',
          directory: FilesystemDirectory.Documents,
          encoding: FilesystemEncoding.UTF8
        });
        this.numeros = await contents.data.toString().split(","); 
      }catch(e) {
        console.error('Unable to read file', e);
        this.leu = false;
        this.firstNbr = Math.floor(Math.random() * (this.maxRand - this.minRand +1) + this.minRand);
        this.secondNbr = Math.floor(Math.random() * (this.maxRand - this.minRand +1) )+ this.minRand;
      }
      
      if(this.leu === true){
        this.firstNbr = Number(this.numeros[0]);
        this.secondNbr = Number(this.numeros[1]);
      }
      
      await this.first.next(this.firstNbr);
      await this.second.next(this.secondNbr);
      
      await this.delay(10000);
      
      this.firstNbr++;
      this.secondNbr--;

      try {
        const result = await Filesystem.writeFile({
          path: 'numeros.txt',
          data: (this.firstNbr.toString() + "," + this.secondNbr.toString()),
          directory: FilesystemDirectory.Documents,
          encoding: FilesystemEncoding.UTF8
        })
        console.log('Wrote file', result);
      } catch(e) {
        console.error('Unable to write file', e);
      }
      
    }
  }

  delay(milisegundos:number) {
    return new Promise(resolve=>{setTimeout(resolve,milisegundos);});
  }

  getFirst() : Observable<number>{
    return this.first.asObservable();
  }

  getSecond(): Observable<number>{
    return this.second.asObservable();
  }

  setStop(status: boolean){
    this.stop = status;
  }

  getStop(){
    return this.stop;
  }
}
