import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableInfoexogenaComponent } from './components/table-infoexogena/table-infoexogena.component';
import { SetElegirentidadComponent } from './components/set-elegirentidad/set-elegirentidad.component';
import { StepperRegistroComponent } from './components/stepper-registro/stepper-registro.component';


const routes: Routes = [
  {
    path: 'lista',
    component: TableInfoexogenaComponent,
  },
  {
    path: 'entidad',
    component: SetElegirentidadComponent,
  },
  {
    path: 'registro',
    component: StepperRegistroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarinformacionRoutingModule { }
