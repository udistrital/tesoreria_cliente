import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaTercerosRoutingModule } from './consulta-terceros-routing.module';
import { TablaTercerosComponent } from './components/tabla-terceros/tabla-terceros.component';
import { DetalleTerceroComponent } from './components/detalle-tercero/detalle-tercero.component';
import { DetalleDatosComponent } from './components/detalle-datos/detalle-datos.component';
import { DetalleOrdenesPagoComponent } from './components/detalle-ordenes-pago/detalle-ordenes-pago.component';
import { DetalleGiroComponent } from './components/detalle-giro/detalle-giro.component';


@NgModule({
  declarations: [TablaTercerosComponent, DetalleTerceroComponent, DetalleDatosComponent, DetalleOrdenesPagoComponent, DetalleGiroComponent],
  imports: [
    CommonModule,
    ConsultaTercerosRoutingModule
  ]
})
export class ConsultaTercerosModule { }
