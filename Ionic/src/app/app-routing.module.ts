 import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

 
  {
    path: 'menu2',
    loadChildren: () => import('./components/menu2/menu2.module').then(m => m.Menu2PageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./login/usuarios/usuarios.module').then(m => m.UsuariosPageModule)
  },
  {
    path: 'proceso',
    loadChildren: () => import('./login/proceso/proceso.module').then(m => m.ProcesoPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./login/registrarce/registrarce.module').then(m => m.RegistrarcePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'g-despacho',
    loadChildren: () => import('./despacho/despacho.module').then( m => m.DespachoPageModule)
  },
  {
    path: 'd-despacho',
    loadChildren: () => import('./despacho/despacho-detalle/despacho-detalle.module').then( m => m.DespachoDetallePageModule)
  },
  {
    path: 'producto',
    loadChildren: () => import('./despacho/despacho-detalle/agregar-producto/agregar-producto.module').then( m => m.AgregarProductoPageModule)
  },
  {
    path: 'modo-carge',
    loadChildren: () => import('./despacho/modo-cargue/modo-cargue.module').then(m => m.ModoCarguePageModule)
  },
  {
    path: 'fotosSP',
    loadChildren: () => import('./despacho/modo-cargue/fotos-sp/fotos-sp.module').then(m => m.FotosSPPageModule)
  },
  {
    path: 'check-list',
    loadChildren: () => import('./despacho/checklist/checklist.module').then( m => m.ChecklistPageModule)
  },

  {
    path: 'fotos',
    loadChildren: () => import('./fotos/fotos.module').then( m => m.FotosPageModule)
  },
  {
    path: 'resumen',
    loadChildren: () => import('./resumen/resumen.module').then( m => m.ResumenPageModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./components/components.module').then( m => m.ComponentsPageModule)
  },

  
  {
    path: 'recepcion',
    loadChildren: () => import('./recepcion/recepcion.module').then( m => m.RecepcionPageModule)
  },
  {
    path: 'red-despacho',
    loadChildren: () => import('./recepcion/despacho-detalle/despacho-detalle.module').then( m => m.DespachoDetallePageModule)
  },
  {
    path: 'reproducto',
    loadChildren: () => import('./recepcion/despacho-detalle/agregar-producto/agregar-producto.module').then( m => m.AgregarProductoPageModule)
  },
  {
    path: 'remodo-carge',
    loadChildren: () => import('./recepcion/modo-cargue/modo-cargue.module').then(m => m.ModoCarguePageModule)
  },
  {
    path: 'recheck-list',
    loadChildren: () => import('./recepcion/checklist/checklist.module').then( m => m.ChecklistPageModule)
  },

  {
    path: 'refotos',
    loadChildren: () => import('./fotos/fotos.module').then( m => m.FotosPageModule)
  },
  {
    path: 'reresumen',
    loadChildren: () => import('./resumen/resumen.module').then( m => m.ResumenPageModule)
  },

  {
    path: 'places',
    //paginas hijos
    // en la primera entra ala raiz de places y en la segunda 
    // entra a escoger el id y mpstrar detalles 
    children: [
      {
        path: '',
        loadChildren: () => import('./places/places.module').then(m => m.PlacesPageModule)
      },
      {
        path: ':placeId',
        loadChildren: () => import('./places/places-details/places-details.module').then(m => m.PlacesDetailsPageModule)
      }
    ]
  },
  {
    //ruta en el navegador
    path: 'new-place',
    // cargar la clase q esta en el modulo q se importa 
    loadChildren: () => import('./places/place-add/place-add.module').then(m => m.PlaceAddPageModule)

  }
  
  
 
 


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
