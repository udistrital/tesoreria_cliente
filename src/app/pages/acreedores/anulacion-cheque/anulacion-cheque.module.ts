import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnulacionChequeRoutingModule } from './anulacion-cheque-routing.module';
import { SubirArchivoComponent } from './components/subir-archivo/subir-archivo.component';
import { TablaAnulacionComponent } from './components/tabla-anulacion/tabla-anulacion.component';
import { DetalleGiroComponent } from './components/detalle-giro/detalle-giro.component';
import { AnularChequeComponent } from './components/anular-cheque/anular-cheque.component';
import { ModalChequeAnuladoComponent } from './components/modal-cheque-anulado/modal-cheque-anulado.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatSelectModule } from '@angular/material';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedModule } from '../../../shared/shared.module';
import { ProyeccionRoutingModule } from '../../plan-anual-caja/proyeccion/proyeccion-routing.module';
import { ContabilizacionComponent } from './components/contabilizacion/contabilizacion.component';


@NgModule({
  declarations: [
    SubirArchivoComponent,
    TablaAnulacionComponent,
    DetalleGiroComponent,
    AnularChequeComponent,
    ModalChequeAnuladoComponent,
    ContabilizacionComponent,

  ],
  imports: [
    CommonModule,
    AnulacionChequeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    CurrencyMaskModule,
    ScrollingModule,
    MatSelectModule,
  ],
  entryComponents: [
    ModalChequeAnuladoComponent,
  ]
})
export class AnulacionChequeModule { }
