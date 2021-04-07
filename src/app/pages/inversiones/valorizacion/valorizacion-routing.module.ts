import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableOtrasentidaesComponent } from './components/table-otrasentidaes/table-otrasentidaes.component';
import { RegistroinicialComponent } from './components/registroinicial/registroinicial.component';


const routes: Routes = [
  {
    path: 'lista',
    component: TableOtrasentidaesComponent,
  },
  {
    path: 'registro',
    component: RegistroinicialComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValorizacionRoutingModule { }
