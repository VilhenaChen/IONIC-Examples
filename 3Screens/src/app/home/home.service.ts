import { Injectable } from '@angular/core';
import { Fruto } from './fruto.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private palavras : string[] = ['amov', 'partner','refrigerator','expertise','distort',
  'experiment','established','artist','mutter','deficiency','lounge',
  'rack','key','difference','speech','reptile',
  'metal','attraction','citizen','table','equal',
  'criticism','comfort','grounds','toss','few',
  'era','sunrise','disappear','cottage','network',
  'eagle','tidy','assessment','accurate','war',
  'brush','grandmother','electron','promotion','first',
  'be','crude','suppress','part','snuggle',
  'minister','tribute','drink','reckless','disappoint'];

  private fruta : Fruto[]=[
    {
      id: 'f1',
      titulo: 'Banana',
      urlImagem: './assets/imgs/Banana.jpg',
      quantidade: 6
    },
    {
      id: 'f2',
      titulo: 'Maçã',
      urlImagem: './assets/imgs/Maçã.jpg',
      quantidade: 10
    },
    {
      id: 'f3',
      titulo: 'Cereja',
      urlImagem: './assets/imgs/Cereja.jpg',
      quantidade: 30
    },
    {
      id: 'f4',
      titulo: 'Pera',
      urlImagem: './assets/imgs/Pera.jpg',
      quantidade: 4
    },
    {
      id: 'f5',
      titulo: 'Acerola',
      urlImagem: './assets/imgs/Acerola.jpg',
      quantidade: 10
    },
    {
      id: 'f6',
      titulo: 'Laranja',
      urlImagem: './assets/imgs/Laranja.jpg',
      quantidade: 1
    },
    {
      id: 'f7',
      titulo: 'Abacaxi',
      urlImagem: './assets/imgs/Abacaxi.jpg',
      quantidade: 2
    },
    {
      id: 'f8',
      titulo: 'Romã',
      urlImagem: './assets/imgs/Romã.jpg',
      quantidade: 5
    },
    {
      id: 'f9',
      titulo: 'Morango',
      urlImagem: './assets/imgs/Morango.jpg',
      quantidade: 25
    },
    {
      id: 'f10',
      titulo: 'Côco',
      urlImagem: './assets/imgs/Côco.jpg',
      quantidade: 3
    },
    {
      id: 'f11',
      titulo: 'Limão',
      urlImagem: './assets/imgs/Limão.jpg',
      quantidade: 30
    },
    {
      id: 'f12',
      titulo: 'Figo',
      urlImagem: './assets/imgs/Figo.jpg',
      quantidade: 9
    },
    {
      id: 'f13',
      titulo: 'Mirtilo',
      urlImagem: './assets/imgs/Mirtilo.jpg',
      quantidade: 10
    },
    {
      id: 'f14',
      titulo: 'Pêssego',
      urlImagem: './assets/imgs/Pêssego.jpg',
      quantidade: 15
    },
    {
      id: 'f15',
      titulo: 'Melão',
      urlImagem: './assets/imgs/Melão.jpg',
      quantidade: 1
    },
    {
      id: 'f16',
      titulo: 'Melancia',
      urlImagem: './assets/imgs/Melancia.jpg',
      quantidade: 1
    }
  ];  

  constructor() {}

  getAllWords()
  {
    return [...this.palavras];
  }

  getFruta()
  {
    return [...this.fruta];
  }


}
