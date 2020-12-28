import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaImagensPageRoutingModule } from './lista-imagens-routing.module';

import { ListaImagensPage } from './lista-imagens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaImagensPageRoutingModule
  ],
  declarations: [ListaImagensPage]
})
export class ListaImagensPageModule {}
