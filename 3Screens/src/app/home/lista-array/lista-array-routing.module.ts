import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaArrayPage } from './lista-array.page';

const routes: Routes = [
  {
    path: '',
    component: ListaArrayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaArrayPageRoutingModule {}
