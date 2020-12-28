import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaArrayPageRoutingModule } from './lista-array-routing.module';

import { ListaArrayPage } from './lista-array.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaArrayPageRoutingModule
  ],
  declarations: [ListaArrayPage]
})
export class ListaArrayPageModule {}
