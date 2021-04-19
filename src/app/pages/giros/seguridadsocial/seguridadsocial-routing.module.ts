import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutSeguridadsocialComponent } from './components/layout-seguridadsocial/layout-seguridadsocial.component';
import { ListaSeguridadComponent } from './components/lista-seguridad/lista-seguridad.component';
import { CrearGiroComponent } from './components/crear-giro/crear-giro.component';


const routes: Routes = [{
  path: '',
  component: LayoutSeguridadsocialComponent,
  children: [
    {
      path: 'lista',
      component: ListaSeguridadComponent
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
export class SeguridadsocialRoutingModule { }
