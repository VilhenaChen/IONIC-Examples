import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaImagensPage } from './lista-imagens.page';

const routes: Routes = [
  {
    path: '',
    component: ListaImagensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaImagensPageRoutingModule {}
