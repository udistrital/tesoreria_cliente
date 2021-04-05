import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableInversionfinancieraComponent } from './components/table-inversionfinanciera/table-inversionfinanciera.component';
import { StepperRegistroComponent } from './components/stepper-registro/stepper-registro.component';



const routes: Routes = [
  {
    path: 'lista',
    component: TableInversionfinancieraComponent,
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
export class AdquisicionRoutingModule { }
