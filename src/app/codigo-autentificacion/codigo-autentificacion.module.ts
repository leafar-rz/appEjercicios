import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigoAutentificacionPageRoutingModule } from './codigo-autentificacion-routing.module';

import { CodigoAutentificacionPage } from './codigo-autentificacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigoAutentificacionPageRoutingModule
  ],
  declarations: [CodigoAutentificacionPage]
})
export class CodigoAutentificacionPageModule {}
