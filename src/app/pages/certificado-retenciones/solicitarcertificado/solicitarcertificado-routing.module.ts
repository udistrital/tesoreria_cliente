import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableRetencionesComponent } from './components/table-retenciones/table-retenciones.component';
import { SetCertificadoComponent } from './components/set-certificado/set-certificado.component';


const routes: Routes = [
  {
    path: 'lista',
    component: TableRetencionesComponent,
  },
  {
    path: 'solicitar',
    component: SetCertificadoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitarcertificadoRoutingModule { }
