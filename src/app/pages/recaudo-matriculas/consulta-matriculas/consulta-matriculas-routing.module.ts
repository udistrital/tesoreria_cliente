import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaGeneralComponent } from './components/consulta-general/consulta-general.component';
import { ContabilizacionComponent } from './components/contabilizacion/contabilizacion.component';
import { TablaConsultaComponent } from './components/tabla-consulta/tabla-consulta.component';


const routes: Routes = [
  {
    path: 'consulta-general',
    component: ConsultaGeneralComponent,
  },
  {
    path: 'contabilizacion',
    component: TablaConsultaComponent,
  },
  {
    path: 'tabla-general',
    component:ContabilizacionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaMatriculasRoutingModule { }
