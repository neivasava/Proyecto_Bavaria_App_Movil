import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModoCarguePage } from './modo-cargue.page';

const routes: Routes = [
  {
    path: '',
    component: ModoCarguePage
  },
  {
    path: 'fotos-sp',
    loadChildren: () => import('./fotos-sp/fotos-sp.module').then( m => m.FotosSPPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModoCarguePageRoutingModule {}
