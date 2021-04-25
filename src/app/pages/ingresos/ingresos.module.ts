import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresosRoutingModule } from './ingresos-routing.module';
import { ListaIngresosComponent } from './components/lista-ingresos/lista-ingresos.component';
import { LayoutIngresosComponent } from './components/layout-ingresos/layout-ingresos.component';
import { CrearIngresosComponent } from './components/crear-ingresos/crear-ingresos.component';
import { SetInicioComponent } from './components/set-inicio/set-inicio.component';
import { SetConsignacionesComponent } from './components/set-consignaciones/set-consignaciones.component';
import { SetAfectacionComponent } from './components/set-afectacion/set-afectacion.component';
import { SetContabilizarComponent } from './components/set-contabilizar/set-contabilizar.component';


@NgModule({
  declarations: [ListaIngresosComponent, LayoutIngresosComponent, CrearIngresosComponent, SetInicioComponent, SetConsignacionesComponent, SetAfectacionComponent, SetContabilizarComponent],
  imports: [
    CommonModule,
    IngresosRoutingModule
  ]
})
export class IngresosModule { }
