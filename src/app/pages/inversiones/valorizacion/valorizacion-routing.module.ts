import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableOtrasentidadesComponent } from './components/table-otrasentidades/table-otrasentidades.component';
import { RegistroinicialComponent } from './components/registroinicial/registroinicial.component';
import { StepperValorizacionComponent } from './components/stepper-valorizacion/stepper-valorizacion.component';


const routes: Routes = [
  {
    path: 'lista',
    component: TableOtrasentidadesComponent,
  },
  {
    path: 'registro',
    component: RegistroinicialComponent,
  },
  {
    path: 'proceso',
    component: StepperValorizacionComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValorizacionRoutingModule { }
