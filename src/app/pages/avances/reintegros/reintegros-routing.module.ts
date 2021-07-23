import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepperReintegrosComponent } from './components/stepper-reintegros/stepper-reintegros.component';
import { TableLegalizacionReintegrosComponent } from './components/table-legalizacion-reintegros/table-legalizacion-reintegros.component';


const routes: Routes = [
  {
    path: 'lista',
    component: TableLegalizacionReintegrosComponent,
  },
  {
    path: 'crear',
    component: StepperReintegrosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReintegrosRoutingModule { }
