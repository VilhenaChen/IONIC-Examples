import { HomeService } from '../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-array',
  templateUrl: './lista-array.page.html',
  styleUrls: ['./lista-array.page.scss'],
})
export class ListaArrayPage implements OnInit {
  palavras: String[] = [];  
  
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.palavras= this.homeService.getAllWords();
  }

}
