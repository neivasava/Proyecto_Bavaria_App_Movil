import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcesoPageRoutingModule } from './proceso-routing.module';

import { ProcesoPage } from './proceso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcesoPageRoutingModule
  ],
  declarations: [ProcesoPage]
})
export class ProcesoPageModule {}
