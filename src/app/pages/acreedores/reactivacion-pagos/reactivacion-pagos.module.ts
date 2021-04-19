import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactivacionPagosRoutingModule } from './reactivacion-pagos-routing.module';
import { SolicitudReactivacionComponent } from './components/solicitud-reactivacion/solicitud-reactivacion.component';
import { TablaSolicitudesComponent } from './components/tabla-solicitudes/tabla-solicitudes.component';
import { RespuestaSolicitudComponent } from './components/respuesta-solicitud/respuesta-solicitud.component';
import { ConsultaOrdenesPagoComponent } from './components/consulta-ordenes-pago/consulta-ordenes-pago.component';
import { GirosAsociadosComponent } from './components/giros-asociados/giros-asociados.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatSelectModule } from '@angular/material';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    SolicitudReactivacionComponent,
    TablaSolicitudesComponent,
    RespuestaSolicitudComponent,
    ConsultaOrdenesPagoComponent,
    GirosAsociadosComponent
  ],
  imports: [
    CommonModule,
    ReactivacionPagosRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    CurrencyMaskModule,
    ScrollingModule,
    MatSelectModule,
  ],
  entryComponents: [
    ConsultaOrdenesPagoComponent,
    GirosAsociadosComponent,
  ]
})
export class ReactivacionPagosModule { }
