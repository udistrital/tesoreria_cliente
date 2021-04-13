import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
import { ReportePacComponent } from './components/reporte-pac/reporte-pac.component';
import { TablaReportePacComponent } from './components/tabla-reporte-pac/tabla-reporte-pac.component';
import { RevisionReportePacComponent } from './components/revision-reporte-pac/revision-reporte-pac.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatSelectModule } from '@angular/material';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedModule } from '../../../shared/shared.module';
import { NbDatepickerModule } from '@nebular/theme';


@NgModule({
  declarations: [
    ReportePacComponent,
    TablaReportePacComponent,
    RevisionReportePacComponent
  ],
  imports: [
    CommonModule,
    ReporteRoutingModule,
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
export class ReporteModule { }
