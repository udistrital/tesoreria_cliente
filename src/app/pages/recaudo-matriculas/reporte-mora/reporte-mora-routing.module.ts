import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaGeneralMoraComponent } from './components/consulta-general-mora/consulta-general-mora.component';
import { TablaGeneralMoraComponent } from './components/tabla-general-mora/tabla-general-mora.component';


const routes: Routes = [
  {
    path: 'tabla-general',
    component: TablaGeneralMoraComponent,
  },
  {
    path: 'consulta-general',
    component: ConsultaGeneralMoraComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteMoraRoutingModule { }
