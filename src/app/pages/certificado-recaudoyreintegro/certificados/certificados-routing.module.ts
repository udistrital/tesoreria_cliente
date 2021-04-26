import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableCertificadosComponent } from './components/table-certificados/table-certificados.component';
import { StepperCertificacionesComponent } from './components/stepper-certificaciones/stepper-certificaciones.component';


const routes: Routes = [
  {
    path: 'lista',
    component: TableCertificadosComponent,
  },
  {
    path: 'generar',
    component: StepperCertificacionesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificadosRoutingModule { }
