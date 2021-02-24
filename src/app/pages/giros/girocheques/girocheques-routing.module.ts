import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutGirochequeComponent } from './components/layout-girocheque/layout-girocheque.component';
import { ListComponent } from './components/list/list.component';
import { CreateGiroComponent } from './components/create-giro/create-giro.component';


const routes: Routes = [{
  path: '',
  component: LayoutGirochequeComponent,
  children: [
    {
      path: 'lista',
      component: ListComponent
    },
    {
      path: 'creargiro',
      component: CreateGiroComponent
    },
    {
      path: '',
      redirectTo: 'lista',
      pathMatch: 'full',
    },
    {
      path: '**',
      redirectTo: 'lista',
      pathMatch: 'full',
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GirochequesRoutingModule { }
