import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaNumerosPageRoutingModule } from './lista-numeros-routing.module';

import { ListaNumerosPage } from './lista-numeros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaNumerosPageRoutingModule
  ],
  declarations: [ListaNumerosPage]
})
export class ListaNumerosPageModule {}
