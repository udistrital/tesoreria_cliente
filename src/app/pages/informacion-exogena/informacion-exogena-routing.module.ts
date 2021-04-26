import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformacionExogenaComponent } from './informacion-exogena.component';


const routes: Routes = [{
  path: '',
  component: InformacionExogenaComponent,
  children: [
    {
      path: 'consolidar',
      loadChildren: () => import('./registrarinformacion/registrarinformacion.module')
        .then(m => m.RegistrarinformacionModule),
    },
    {
      path: 'prevalidador',
      loadChildren: () => import('./prevalidador/prevalidador.module')
        .then(m => m.PrevalidadorModule),
    },
    {
      path: 'consultainformacion',
      loadChildren: () => import('./consultarinformacion/consultarinformacion.module')
        .then(m => m.ConsultarinformacionModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformacionExogenaRoutingModule { }
