import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FotosPageModule } from './fotos.module';

import { FotosPage } from './fotos.page';

const routes: Routes = [
  {
    path: '',
    component: FotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FotosPageRoutingModule {}