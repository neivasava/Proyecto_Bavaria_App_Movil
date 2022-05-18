import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'registrarce',
    loadChildren: () => import('./registrarce/registrarce.module').then( m => m.RegistrarcePageModule)
  },
  {
    path: 'proceso',
    loadChildren: () => import('./proceso/proceso.module').then( m => m.ProcesoPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
