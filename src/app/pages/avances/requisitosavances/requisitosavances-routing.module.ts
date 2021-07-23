import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaRequisitosavancesComponent } from './components/lista-requisitosavances/lista-requisitosavances.component';
import { SetRequisitoavancesComponent } from './components/set-requisitoavances/set-requisitoavances.component';


const routes: Routes = [
  {
    path: 'lista',
    component: ListaRequisitosavancesComponent,
  },
  {
    path: 'crear',
    component: SetRequisitoavancesComponent,
  },
  {
    path: 'editar/:id',
    component: SetRequisitoavancesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequisitosavancesRoutingModule { }
