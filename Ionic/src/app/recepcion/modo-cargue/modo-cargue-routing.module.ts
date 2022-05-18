import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModoCarguePage } from './modo-cargue.page';

const routes: Routes = [
  {
    path: '',
    component: ModoCarguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModoCarguePageRoutingModule {}
