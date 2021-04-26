import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableAprobacionesComponent } from './components/table-aprobaciones/table-aprobaciones.component';
import { SetConsultayaprobacionComponent } from './components/set-consultayaprobacion/set-consultayaprobacion.component';


const routes: Routes = [
  {
    path: 'lista',
    component: TableAprobacionesComponent,
  },
  {
    path: 'consulta',
    component: SetConsultayaprobacionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprobarsolicitudRoutingModule { }
