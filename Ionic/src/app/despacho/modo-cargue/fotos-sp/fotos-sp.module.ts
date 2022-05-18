import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FotosSPPageRoutingModule } from './fotos-sp-routing.module';

import { FotosSPPage } from './fotos-sp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FotosSPPageRoutingModule
  ],
  declarations: [FotosSPPage]
})
export class FotosSPPageModule {}
