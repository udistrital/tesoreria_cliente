import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'proyeccion',
    loadChildren: () => import('./proyeccion/proyeccion.module')
    .then(m => m.ProyeccionModule),
  },
  {
    path: 'aprobacion',
    loadChildren: () => import('./aprobacion/aprobacion.module')
    .then(m => m.AprobacionModule),
  },
  {
    path: 'seguimiento',
    loadChildren: () => import('./seguimiento/seguimiento.module')
    .then(m => m.SeguimientoModule),
  },
  {
    path: 'reporte',
    loadChildren: () => import('./reporte/reporte.module')
    .then(m => m.ReporteModule),
  },
  {
    path: 'cierre',
    loadChildren: () => import('./cierre/cierre.module')
    .then(m => m.CierreModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanAnualCajaRoutingModule { }
