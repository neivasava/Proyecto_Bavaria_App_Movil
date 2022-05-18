import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DespachoDetallePageRoutingModule } from './despacho-detalle-routing.module';

import { DespachoDetallePage } from './despacho-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DespachoDetallePageRoutingModule
  ],
  declarations: [DespachoDetallePage]
})
export class DespachoDetallePageModule {}
