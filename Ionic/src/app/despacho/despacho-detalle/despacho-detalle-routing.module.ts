import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DespachoDetallePage } from './despacho-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: DespachoDetallePage
  },
  {
    path: 'agregar-producto',
    loadChildren: () => import('./agregar-producto/agregar-producto.module').then( m => m.AgregarProductoPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespachoDetallePageRoutingModule {}
