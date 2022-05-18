import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcesoPage } from './proceso.page';

const routes: Routes = [
  {
    path: '',
    component: ProcesoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcesoPageRoutingModule {}
