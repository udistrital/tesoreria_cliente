import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableConsultainformeComponent } from './components/table-consultainforme/table-consultainforme.component';
import { SetConsultasolicitanteComponent } from './components/set-consultasolicitante/set-consultasolicitante.component';
import { SetGenerarcertificadoComponent } from './components/set-generarcertificado/set-generarcertificado.component';


const routes: Routes = [
  {
    path: 'lista',
    component: TableConsultainformeComponent,
  },
  {
    path: 'generar',
    component: SetGenerarcertificadoComponent,
  },
  {
    path: 'consultar',
    component: SetConsultasolicitanteComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerarcertificadoRoutingModule { }
