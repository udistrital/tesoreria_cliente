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
      path: 'nomina',
      loadChildren: () => import('./girosnomina/girosnomina.module')
      .then(m => m.GirosnominaModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GirosRoutingModule { }
