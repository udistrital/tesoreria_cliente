import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteMoraRoutingModule } from './reporte-mora-routing.module';
import { ConsultaGeneralMoraComponent } from './components/consulta-general-mora/consulta-general-mora.component';
import { TablaGeneralMoraComponent } from './components/tabla-general-mora/tabla-general-mora.component';
import { DetalleGeneralMoraComponent } from './components/detalle-general-mora/detalle-general-mora.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatSelectModule } from '@angular/material';
import { NbDatepickerModule } from '@nebular/theme';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    ConsultaGeneralMoraComponent,
    TablaGeneralMoraComponent,
    DetalleGeneralMoraComponent
  ],
  imports: [
    CommonModule,
    ReporteMoraRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    CurrencyMaskModule,
    ScrollingModule,
    MatSelectModule,
    NbDatepickerModule,
  ]
})
export class ReporteMoraModule { }
