import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InversionesComponent } from './inversiones.component';


const routes: Routes = [{
  path: '',
  component: InversionesComponent,
  children: [
    {
      path: 'adquisicion',
      loadChildren: () => import('./adquisicion/adquisicion.module')
        .then(m => m.AdquisicionModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InversionesRoutingModule { }
