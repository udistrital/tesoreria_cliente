import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearBoletinComponent } from './components/crear-boletin/crear-boletin.component';
import { ListComponent } from './components/list/list.component';
import { LayoutBoletinComponent } from './components/layout-boletin/layout-boletin.component';


const routes: Routes = [{
  path: '',
  component: LayoutBoletinComponent,
  children: [
    {
      path: 'lista',
      component: ListComponent
    },
    {
      path: 'crear',
      component: CrearBoletinComponent
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
export class BoletinDiarioRoutingModule { }
