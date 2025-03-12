import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InmobiliariaPage } from './inmobiliaria.page';

const routes: Routes = [
  {
    path: '',
    component: InmobiliariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InmobiliariaPageRoutingModule {}
