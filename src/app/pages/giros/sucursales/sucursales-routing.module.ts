import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableListasucursalComponent } from './components/table-listasucursal/table-listasucursal.component';
import { CreateSucursalComponent } from './components/create-sucursal/create-sucursal.component';

const routes: Routes = [  {
  path: 'lista',
  component: TableListasucursalComponent,
},
{
  path: 'crear',
  component: CreateSucursalComponent,
},
{
  path: 'editar/:id',
  component: CreateSucursalComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalesRoutingModule { }
