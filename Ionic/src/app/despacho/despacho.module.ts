import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DespachoPageRoutingModule } from './despacho-routing.module';
import { DespachoPage } from './despacho.page';
import { HttpClient } from "@angular/common/http";
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DespachoPageRoutingModule,
    PipesModule
  ],
  declarations: [DespachoPage]
})
export class DespachoPageModule {}
