import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutEjecucionComponent } from './components/layout-ejecucion/layout-ejecucion.component';
import { InformeComponent } from './components/informe/informe.component';
import { ConsolidadoComponent } from './components/consolidado/consolidado.component';
import { EjecucionComponent } from './components/ejecucion/ejecucion.component';

const routes: Routes = [{
  path: '',
  component: LayoutEjecucionComponent,
  children: [
    {
      path: 'informe',
      component: InformeComponent
    },
    {
      path: 'consolidado',
      component: ConsolidadoComponent
    },
    {
      path: 'ejecucion',
      component: EjecucionComponent
    },
    {
      path: '',
      redirectTo: 'informe',
      pathMatch: 'full',
    },
    {
      path: '**',
      redirectTo: 'informe',
      pathMatch: 'full',
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjecucionavancesRoutingModule { }
