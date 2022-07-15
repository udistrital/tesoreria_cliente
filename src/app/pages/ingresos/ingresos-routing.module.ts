import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutIngresosComponent } from './components/layout-ingresos/layout-ingresos.component';
import { ListaIngresosComponent } from './components/lista-ingresos/lista-ingresos.component';
import { CrearIngresosComponent } from './components/crear-ingresos/crear-ingresos.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutIngresosComponent,
    children: [
      {
        path: 'lista',
        component: ListaIngresosComponent,
      },
      {
        path: 'crear/:tipoIngreso',
        component: CrearIngresosComponent,
      },
      {
        path: 'lista/:tipoIngreso',
        component: ListaIngresosComponent,
      },
      {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'lista',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresosRoutingModule {}
