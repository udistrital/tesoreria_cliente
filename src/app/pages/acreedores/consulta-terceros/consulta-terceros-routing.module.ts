import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleTerceroComponent } from './components/detalle-tercero/detalle-tercero.component';
import { TablaTercerosComponent } from './components/tabla-terceros/tabla-terceros.component';


const routes: Routes = [
  {
    path: 'tabla-consulta',
    component: TablaTercerosComponent
  },
  {
    path: 'detalle',
    component: DetalleTerceroComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaTercerosRoutingModule { }
