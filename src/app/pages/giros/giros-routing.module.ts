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
      path: 'proveedores',
      loadChildren: () => import('./girosproveedores/girosproveedores.module')
      .then(m => m.GirosproveedoresModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GirosRoutingModule { }
