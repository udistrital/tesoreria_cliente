import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvancesComponent } from './avances.component';
import { ConsultaModule } from './consulta/consulta.module';


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
      path: 'consultas',
      loadChildren: () => import('./consulta/consulta.module')
      .then(m => m.ConsultaModule),
    },
    {
      path: 'requisitosavances',
      loadChildren: () => import('./requisitosavances/requisitosavances.module')
      .then(m => m.RequisitosavancesModule),
    },
    {
<<<<<<< HEAD
      path: 'solicitudavances',
      loadChildren: () => import('./solicitudavances/solicitudavances.module')
      .then(m => m.SolicitudavancesModule),
    },
    {
      path: 'reintegrosavances',
      loadChildren: () => import('./reintegros/reintegros.module')
      .then(m => m.ReintegrosModule),
    },
=======
      path: 'especificacionesavances',
      loadChildren: () => import('./especificacionesavances/especificacionesavances.module')
      .then(m => m.EspecificacionesavancesModule),
    }
>>>>>>> fd33879f952aee98b7b9cb3c435fd6355b92cc4c
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvancesRoutingModule { }
