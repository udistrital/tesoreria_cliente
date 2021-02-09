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
      path: 'legalizacionavance',
      loadChildren: () => import('./legalizacionavance/legalizacionavance.module')
      .then(m => m.LegalizacionavanceModule),
    },
    {
      path: 'especificacionesavances',
      loadChildren: () => import('./especificacionesavances/especificacionesavances.module')
      .then(m => m.EspecificacionesavancesModule),
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvancesRoutingModule { }
