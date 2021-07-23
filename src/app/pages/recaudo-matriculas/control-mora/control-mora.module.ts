import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlMoraRoutingModule } from './control-mora-routing.module';
import { ConsultaControlMoraComponent } from './components/consulta-control-mora/consulta-control-mora.component';
import { TablaControlMoraComponent } from './components/tabla-control-mora/tabla-control-mora.component';
import { DetalleControlMoraComponent } from './components/detalle-control-mora/detalle-control-mora.component';
import { ContabilizacionComponent } from './components/contabilizacion/contabilizacion.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatSelectModule } from '@angular/material';
import { NbDatepickerModule } from '@nebular/theme';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    ConsultaControlMoraComponent,
    TablaControlMoraComponent,
    DetalleControlMoraComponent,
    ContabilizacionComponent
  ],
  imports: [
    CommonModule,
    ControlMoraRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    CurrencyMaskModule,
    ScrollingModule,
    MatSelectModule,
    NbDatepickerModule,
    MatDialogModule,
  ]
})
export class ControlMoraModule { }
