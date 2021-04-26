import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaTercerosRoutingModule } from './consulta-terceros-routing.module';
import { TablaTercerosComponent } from './components/tabla-terceros/tabla-terceros.component';
import { DetalleTerceroComponent } from './components/detalle-tercero/detalle-tercero.component';
import { DetalleDatosComponent } from './components/detalle-datos/detalle-datos.component';
import { DetalleOrdenesPagoComponent } from './components/detalle-ordenes-pago/detalle-ordenes-pago.component';
import { DetalleGiroComponent } from './components/detalle-giro/detalle-giro.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    TablaTercerosComponent,
    DetalleTerceroComponent,
    DetalleDatosComponent,
    DetalleOrdenesPagoComponent,
    DetalleGiroComponent,
  ],
  imports: [
    CommonModule,
    ConsultaTercerosRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    CurrencyMaskModule,
    ScrollingModule,
    MatSelectModule,
    MatStepperModule,
  ]
})
export class ConsultaTercerosModule { }
