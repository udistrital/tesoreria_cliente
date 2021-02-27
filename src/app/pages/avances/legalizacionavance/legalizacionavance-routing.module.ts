import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaLegalizacionesComponent } from './components/lista-legalizaciones/lista-legalizaciones.component';
import { SetLegalizacionComponent } from './components/set-legalizacion/set-legalizacion.component';


const routes: Routes = [
  {
    path: 'lista',
    component: ListaLegalizacionesComponent,
  },
  {
    path: 'crear',
    component: SetLegalizacionComponent,
  },
  {
    path: 'editar',
    component: SetLegalizacionComponent,
  },
  {
    path: 'ver',
    component: SetLegalizacionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalizacionavanceRoutingModule { }
