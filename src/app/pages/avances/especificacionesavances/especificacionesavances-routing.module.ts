import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEspecificacionesavancesComponent } from './components/lista-especificacionesavances/lista-especificacionesavances.component';
import { SetEspecificacionavancesComponent } from './components/set-especificacionavances/set-especificacionavances.component';


const routes: Routes = [
  {
    path: 'lista',
    component: ListaEspecificacionesavancesComponent,
  },
  {
    path: 'crear',
    component: SetEspecificacionavancesComponent,
  },
  {
    path: 'editar/:id',
    component: SetEspecificacionavancesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspecificacionesavancesRoutingModule { }
