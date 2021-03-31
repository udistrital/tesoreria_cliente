import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableListabancosComponent } from './components/table-listabancos/table-listabancos.component';
import { CreateBancoComponent } from './components/create-banco/create-banco.component';

const routes: Routes = [  {
  path: 'lista',
  component: TableListabancosComponent,
},
{
  path: 'crear',
  component: CreateBancoComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BancosRoutingModule { }
