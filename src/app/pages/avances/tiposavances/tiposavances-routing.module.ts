import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableTiposavancesComponent } from './components/table-tiposavances/table-tiposavances.component';
import { SetTipodeavanceComponent } from './components/set-tipodeavance/set-tipodeavance.component';
import { SetAsociarrequisitoComponent } from './components/set-asociarrequisito/set-asociarrequisito.component';

const routes: Routes = [
  {
    path: 'lista',
    component: TableTiposavancesComponent,
  },
  {
    path: 'crear',
    component: SetTipodeavanceComponent,
  },
  {
    path: 'editar/:id',
    component: SetTipodeavanceComponent,
  },
  {
    path: 'detalle/:id',
    component: SetTipodeavanceComponent,
  },
  {
    path: 'asociar-requisito/:id',
    component: SetAsociarrequisitoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposavancesRoutingModule { }
