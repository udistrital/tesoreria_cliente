import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableTiposavancesComponent } from './components/table-tiposavances/table-tiposavances.component';
import { SetTipodeavanceComponent } from './components/set-tipodeavance/set-tipodeavance.component';
import { SetAsociarrequisitoComponent } from './components/set-asociarrequisito/set-asociarrequisito.component';

const routes: Routes = [
  {
    path: 'list',
    component: TableTiposavancesComponent,
  },
  {
    path: 'crear-modificar',
    component: SetTipodeavanceComponent,
  },
  {
    path: 'asociar-requisito',
    component: SetAsociarrequisitoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposavancesRoutingModule { }
