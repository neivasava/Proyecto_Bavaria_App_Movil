import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DespachoPage } from './despacho.page';

const routes: Routes = [
  {
    path: '',
    component: DespachoPage
  },
  {
    path: 'resumen',
    loadChildren: () => import('../resumen/resumen.module').then( m => m.ResumenPageModule)
  },
  // {
  //   path: 'despacho-detalle',
  //   loadChildren: () => import('./despacho-detalle/despacho-detalle.module').then( m => m.DespachoDetallePageModule)
  // },
  // {
  //   path: 'modo-cargue',
  //   loadChildren: () => import('./modo-cargue/modo-cargue.module').then( m => m.ModoCarguePageModule)
  // }
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class DespachoPageRoutingModule {}
