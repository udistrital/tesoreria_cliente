import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'prueba',
      loadChildren: () => import('./primer-modulo/primer-modulo.module')
      .then(m => m.PrimerModuloModule),
    },
    {
      path: 'avances',
      loadChildren: () => import('./avances/avances.module')
      .then(m => m.AvancesModule),
    },
    {
      path: 'giros',
      loadChildren: () => import('./giros/giros.module')
      .then(m => m.GirosModule),
    },
    {
      path: 'inversiones',
      loadChildren: () => import('./inversiones/inversiones.module')
      .then(m => m.InversionesModule),
    },
    {
      path: 'declaracionretenciones',
      loadChildren: () => import('./declaracion-retenciones/declaracion-retenciones.module')
      .then(m => m.DeclaracionRetencionesModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
