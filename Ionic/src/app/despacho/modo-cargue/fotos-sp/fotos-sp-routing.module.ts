import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FotosSPPage } from './fotos-sp.page';

const routes: Routes = [
  {
    path: '',
    component: FotosSPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FotosSPPageRoutingModule {}
