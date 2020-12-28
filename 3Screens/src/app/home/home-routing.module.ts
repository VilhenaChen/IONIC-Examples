import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'lista-numeros',
    loadChildren: () => import('./lista-numeros/lista-numeros.module').then( m => m.ListaNumerosPageModule)
  },
  {
    path: 'lista-array',
    loadChildren: () => import('./lista-array/lista-array.module').then( m => m.ListaArrayPageModule)
  },
  {
    path: 'lista-imagens',
    loadChildren: () => import('./lista-imagens/lista-imagens.module').then( m => m.ListaImagensPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
