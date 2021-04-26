import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificadoRetencionesComponent } from './certificado-retenciones.component';


const routes: Routes = [{
  path: '',
  component: CertificadoRetencionesComponent,
  children: [
    {
      path: 'consolidarinformacion',
      loadChildren: () => import('./generarcertificado/generarcertificado.module')
        .then(m => m.GenerarcertificadoModule),
    },
    {
      path: 'solicitarcertificado',
      loadChildren: () => import('./solicitarcertificado/solicitarcertificado.module')
        .then(m => m.SolicitarcertificadoModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificadoRetencionesRoutingModule { }
