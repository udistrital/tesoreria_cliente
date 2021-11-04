import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableCuentabancariaComponent } from './components/table-cuentabancaria/table-cuentabancaria.component';
import { CreateCuentaComponent } from './components/create-cuenta/create-cuenta.component';

const routes: Routes = [  {
  path: 'lista',
  component: TableCuentabancariaComponent,
},
{
  path: 'crear',
  component: CreateCuentaComponent,
},
{
  path: 'editar/:id',
  component: CreateCuentaComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuentasBancariasRoutingModule { }
