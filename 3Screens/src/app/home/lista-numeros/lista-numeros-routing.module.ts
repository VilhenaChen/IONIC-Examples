import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaNumerosPage } from './lista-numeros.page';

const routes: Routes = [
  {
    path: '',
    component: ListaNumerosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaNumerosPageRoutingModule {}
