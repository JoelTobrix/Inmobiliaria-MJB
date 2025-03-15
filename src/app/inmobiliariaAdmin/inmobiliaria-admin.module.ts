import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InmobiliariaAdminPageRoutingModule } from './inmobiliaria-admin-routing.module';

import { InmobiliariaAdminPage } from './inmobiliaria-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InmobiliariaAdminPageRoutingModule
  ],
  declarations: [InmobiliariaAdminPage]
})
export class InmobiliariaAdminPageModule {}
