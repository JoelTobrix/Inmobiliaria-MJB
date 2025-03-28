import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inmobiliaria',
    loadChildren: () => import('./inmobiliaria/inmobiliaria.module').then( m => m.InmobiliariaPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'inmobiliariaAdmin',
    loadChildren: () => import('./inmobiliariaAdmin/inmobiliaria-admin.module').then( m => m.InmobiliariaAdminPageModule)
  },  {
    path: 'adminusuarios',
    loadChildren: () => import('./adminusuarios/adminusuarios.module').then( m => m.AdminusuariosPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
