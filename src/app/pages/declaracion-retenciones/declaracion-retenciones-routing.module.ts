import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableDeclaracionesComponent } from './components/table-declaraciones/table-declaraciones.component';
import { SetStepperdeclaracionComponent } from './components/set-stepperdeclaracion/set-stepperdeclaracion.component';
import { SetConciliaciondeclaracionComponent } from './components/set-conciliaciondeclaracion/set-conciliaciondeclaracion.component';

const routes: Routes = [
  {
    path: 'lista',
    component: TableDeclaracionesComponent,
  },
  {
    path: 'registro',
    component: SetStepperdeclaracionComponent,
  },
  {
    path: 'definitivo',
    component: SetConciliaciondeclaracionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeclaracionRetencionesRoutingModule { }
