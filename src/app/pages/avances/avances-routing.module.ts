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
      path: 'solicitudavances',
      loadChildren: () => import('./solicitudavances/solicitudavances.module')
      .then(m => m.SolicitudavancesModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvancesRoutingModule { }
