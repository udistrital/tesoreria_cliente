import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearReversarComponent } from './components/crear-reversar/crear-reversar.component';
import { LayoutReversarComponent } from './components/layout-reversar/layout-reversar.component';
import { ListaComponent } from './components/lista/lista.component';


const routes: Routes = [{
  path: '',
  component: LayoutReversarComponent,
  children: [
    {
      path: 'lista',
      component: ListaComponent
    },
    {
      path: 'crear',
      component: CrearReversarComponent
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
export class ReversarRoutingModule { }
