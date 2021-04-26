import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusquedaindividualComponent } from './components/busquedaindividual/busquedaindividual.component';


const routes: Routes = [
  {
    path: 'consulta',
    component: BusquedaindividualComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultarinformacionRoutingModule { }
