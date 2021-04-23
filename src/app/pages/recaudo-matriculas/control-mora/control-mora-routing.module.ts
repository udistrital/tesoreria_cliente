import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaControlMoraComponent } from './components/consulta-control-mora/consulta-control-mora.component';
import { ContabilizacionComponent } from './components/contabilizacion/contabilizacion.component';
import { DetalleControlMoraComponent } from './components/detalle-control-mora/detalle-control-mora.component';
import { TablaControlMoraComponent } from './components/tabla-control-mora/tabla-control-mora.component';


const routes: Routes = [
  {
    path: 'tabla-general',
    component: TablaControlMoraComponent,
  },
  {
    path: 'consulta-general',
    component: ConsultaControlMoraComponent,
  },
  {
    path: 'detalle-reporte',
    component: DetalleControlMoraComponent,
  },
  {
    path: 'contabilizacion',
    component: ContabilizacionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlMoraRoutingModule { }
