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
      path: 'boletin',
      loadChildren: () => import('./boletin-diario/boletin-diario.module')
      .then(m => m.BoletinDiarioModule),
    },
    {
      path: 'declaracionretenciones',
      loadChildren: () => import('./declaracion-retenciones/declaracion-retenciones.module')
      .then(m => m.DeclaracionRetencionesModule),
    },
    {
      path: 'recaudoyreintegro',
      loadChildren: () => import('./certificado-recaudoyreintegro/certificado-recaudoyreintegro.module')
      .then(m => m.CertificadoRecaudoyreintegroModule),
    },
    {
      path: 'plan-anual-caja',
      loadChildren: () => import('./plan-anual-caja/plan-anual-caja.module')
      .then(m => m.PlanAnualCajaModule),
    },
    {
      path: 'acreedores',
      loadChildren: () => import('./acreedores/acreedores.module')
      .then(m => m.AcreedoresModule),
    },
    {
      path: 'recaudo-matriculas',
      loadChildren: () => import('./recaudo-matriculas/recaudo-matriculas.module')
      .then(m => m.RecaudoMatriculasModule),
    },
    {
      path: 'ingresosyretenciones',
      loadChildren: () => import('./certificado-retenciones/certificado-retenciones.module')
      .then(m => m.CertificadoRetencionesModule),
    },
    {
      path: 'informacionexogena',
      loadChildren: () => import('./informacion-exogena/informacion-exogena.module')
      .then(m => m.InformacionExogenaModule),
    },
    {
      path: 'ingresos',
      loadChildren: () => import('./ingresos/ingresos.module')
      .then(m => m.IngresosModule),
    },
    {
      path: 'conceptos',
      loadChildren: () => import('./conceptos/conceptos.module')
      .then(m => m.ConceptosModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
