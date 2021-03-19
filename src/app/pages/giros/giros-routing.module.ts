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
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GirosRoutingModule { }
