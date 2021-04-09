import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificadoRecaudoyreintegroComponent } from './certificado-recaudoyreintegro.component';


const routes: Routes = [{
  path: '',
  component: CertificadoRecaudoyreintegroComponent,
  children: [
    {
      path: 'solicitudestudiante',
      loadChildren: () => import('./solicitudestudiante/solicitudestudiante.module')
        .then(m => m.SolicitudestudianteModule),
    },
    {
      path: 'aprobarsolicitud',
      loadChildren: () => import('./aprobarsolicitud/aprobarsolicitud.module')
        .then(m => m.AprobarsolicitudModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificadoRecaudoyreintegroRoutingModule { }
