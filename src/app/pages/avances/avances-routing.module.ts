import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvancesComponent } from './avances.component';


const routes: Routes = [{
  path: '',
  component: AvancesComponent,
  children: [
    {
      path: 'tiposavances',
      loadChildren: () => import('./tiposavances/tiposavances.module')
      .then(m => m.TiposavancesModule),
    },
    {
      path: 'requisitosavances',
      loadChildren: () => import('./requisitosavances/requisitosavances.module')
      .then(m => m.RequisitosavancesModule),
    },
    {
      path: 'solicitudavances',
      loadChildren: () => import('./solicitudavances/solicitudavances.module')
      .then(m => m.SolicitudavancesModule),
    },
    {
      path: 'reintegrosavances',
      loadChildren: () => import('./reintegros/reintegros.module')
      .then(m => m.ReintegrosModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvancesRoutingModule { }
