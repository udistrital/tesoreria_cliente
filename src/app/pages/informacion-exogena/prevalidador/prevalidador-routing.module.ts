import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormatoprevalidadorComponent } from './components/formatoprevalidador/formatoprevalidador.component';


const routes: Routes = [
  {
    path: 'formato',
    component: FormatoprevalidadorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrevalidadorRoutingModule { }
