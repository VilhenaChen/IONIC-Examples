import { HomeService } from './../../home.service';
import { Component, OnInit } from '@angular/core';
import { Fruto } from '../fruto.model';

@Component({
  selector: 'app-lista-imagens',
  templateUrl: './lista-imagens.page.html',
  styleUrls: ['./lista-imagens.page.scss'],
})
export class ListaImagensPage implements OnInit {

  fruta: Fruto[]=[];
  constructor(private homeService:HomeService) { }

  ngOnInit() {
    this.fruta = this.homeService.getFruta();
  }

}
