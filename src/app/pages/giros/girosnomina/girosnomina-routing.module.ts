import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearGiroComponent } from './components/crear-giro/crear-giro.component';
import { ListaComponent } from './components/lista/lista.component';
import { LayoutGironominaComponent } from './components/layout-gironomina/layout-gironomina.component';

const routes: Routes = [{
  path: '',
  component: LayoutGironominaComponent,
  children: [
    {
      path: 'lista',
      component: ListaComponent
    },
    {
      path: 'creargiro',
      component: CrearGiroComponent
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
export class GirosnominaRoutingModule { }
