import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableSolicitudavancesComponent } from './components/table-solicitudavances/table-solicitudavances.component';
import { StepperSolicitudavancesComponent } from './components/stepper-solicitudavances/stepper-solicitudavances.component';


const routes: Routes = [
  {
    path: 'list',
    component: TableSolicitudavancesComponent,
  },
  {
    path: 'crear',
    component: StepperSolicitudavancesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudavancesRoutingModule { }
