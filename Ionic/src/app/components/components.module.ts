import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentsPageRoutingModule } from './components-routing.module';


import { MenuComponent } from './menu/menu.component';
import { ComponentsPage } from './components.page';
import { Menu2Page } from './menu2/menu2.page';
import { Menu2PageModule } from './menu2/menu2.module';

@NgModule({
  exports: [
    MenuComponent,
    Menu2PageModule,
    CommonModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsPageRoutingModule
  ],
  declarations: [ComponentsPage, MenuComponent]
})
export class ComponentsPageModule {}
