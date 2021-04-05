import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GirosComponent } from './giros.component';


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
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GirosRoutingModule { }
