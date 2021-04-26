import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableSolicitudesComponent } from './components/table-solicitudes/table-solicitudes.component';
import { StepperNuevasolicitudComponent } from './components/stepper-nuevasolicitud/stepper-nuevasolicitud.component';


const routes: Routes = [
  {
    path: 'lista',
    component: TableSolicitudesComponent,
  },
  {
    path: 'crear',
    component: StepperNuevasolicitudComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudestudianteRoutingModule { }
