import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlMoraRoutingModule } from './control-mora-routing.module';
import { ConsultaControlMoraComponent } from './components/consulta-control-mora/consulta-control-mora.component';
import { TablaControlMoraComponent } from './components/tabla-control-mora/tabla-control-mora.component';
import { DetalleControlMoraComponent } from './components/detalle-control-mora/detalle-control-mora.component';
import { ContabilizacionComponent } from './components/contabilizacion/contabilizacion.component';


@NgModule({
  declarations: [ConsultaControlMoraComponent, TablaControlMoraComponent, DetalleControlMoraComponent, ContabilizacionComponent],
  imports: [
    CommonModule,
    ControlMoraRoutingModule
  ]
})
export class ControlMoraModule { }
