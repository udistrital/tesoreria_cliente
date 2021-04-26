import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AprobarPacComponent } from './components/aprobar-pac/aprobar-pac.component';


const routes: Routes = [
  {
    path: 'aprobar-pac',
    component: AprobarPacComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprobacionRoutingModule { }
