import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModoCarguePageRoutingModule } from './modo-cargue-routing.module';

import { ModoCarguePage } from './modo-cargue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModoCarguePageRoutingModule
  ],
  declarations: [ModoCarguePage]
})
export class ModoCarguePageModule {}
