import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeguimientoPacComponent } from './components/seguimiento-pac/seguimiento-pac.component';


const routes: Routes = [
  {
    path: 'seguimiento-pac',
    component: SeguimientoPacComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguimientoRoutingModule { }
