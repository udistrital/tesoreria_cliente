import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaMatriculasRoutingModule } from './consulta-matriculas-routing.module';
import { ConsultaGeneralComponent } from './components/consulta-general/consulta-general.component';
import { TablaConsultaComponent } from './components/tabla-consulta/tabla-consulta.component';
import { ContabilizacionComponent } from './components/contabilizacion/contabilizacion.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatSelectModule } from '@angular/material';
import { NbDatepickerModule } from '@nebular/theme';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    ConsultaGeneralComponent,
    TablaConsultaComponent,
    ContabilizacionComponent,
  ],
  imports: [
    CommonModule,
    ConsultaMatriculasRoutingModule,
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
export class ConsultaMatriculasModule { }
