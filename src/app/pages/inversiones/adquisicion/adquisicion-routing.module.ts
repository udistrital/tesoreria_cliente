import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableInversionfinancieraComponent } from './components/table-inversionfinanciera/table-inversionfinanciera.component';
import { StepperRegistroComponent } from './components/stepper-registro/stepper-registro.component';
import { RendimientosComponent } from './components/rendimientos/rendimientos.component';



const routes: Routes = [
  {
    path: 'lista',
    component: TableInversionfinancieraComponent,
  },
  {
    path: 'registro',
    component: StepperRegistroComponent,
  },
  {
    path: 'rendimientos',
    component: RendimientosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdquisicionRoutingModule { }
