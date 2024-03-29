import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CierrePacComponent } from './components/cierre-pac/cierre-pac.component';
import { TablaCierrePacComponent } from './components/tabla-cierre-pac/tabla-cierre-pac.component';


const routes: Routes = [
  {
    path: 'cierre-pac',
    component: CierrePacComponent
  },
  {
    path: 'tabla-cierre-pac',
    component: TablaCierrePacComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CierreRoutingModule { }
