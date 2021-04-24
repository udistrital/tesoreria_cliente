import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GirosComponent } from './giros.component';
import { GirosnominaModule } from './girosnomina/girosnomina.module';


const routes: Routes = [{
  path: '',
  component: GirosComponent,
  children: [
    {
      path: 'cheques',
      loadChildren: () => import('./girocheques/girocheques.module')
      .then(m => m.GirochequesModule),
    },
    {
      path: 'proveedores',
      loadChildren: () => import('./girosproveedores/girosproveedores.module')
      .then(m => m.GirosproveedoresModule),
    },
    {
      path: 'nomina',
      loadChildren: () => import('./girosnomina/girosnomina.module')
      .then(m => m.GirosnominaModule),
    },
    {
      path: 'reversar',
      loadChildren: () => import('./reversar/reversar.module')
      .then(m => m.ReversarModule),
    },
    {
      path: 'bancos',
      loadChildren: () => import('./bancos/bancos.module')
      .then(m => m.BancosModule),
    },
    {
      path: 'sucursales',
      loadChildren: () => import('./sucursales/sucursales.module')
      .then(m => m.SucursalesModule),
    },
    {
      path: 'seguridad',
      loadChildren: () => import('./seguridadsocial/seguridadsocial.module')
      .then(m => m.SeguridadsocialModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GirosRoutingModule { }
