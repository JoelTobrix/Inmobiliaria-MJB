import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InmobiliariaAdminPage } from './inmobiliaria-admin.page';

const routes: Routes = [
  {
    path: '',
    component: InmobiliariaAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InmobiliariaAdminPageRoutingModule {}
