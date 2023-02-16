import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodigoAutentificacionPage } from './codigo-autentificacion.page';

const routes: Routes = [
  {
    path: '',
    component: CodigoAutentificacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodigoAutentificacionPageRoutingModule {}
