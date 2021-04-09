import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
import { ReportePacComponent } from './components/reporte-pac/reporte-pac.component';
import { TablaReportePacComponent } from './components/tabla-reporte-pac/tabla-reporte-pac.component';
import { RevisionReportePacComponent } from './components/revision-reporte-pac/revision-reporte-pac.component';


@NgModule({
  declarations: [ReportePacComponent, TablaReportePacComponent, RevisionReportePacComponent],
  imports: [
    CommonModule,
    ReporteRoutingModule
  ]
})
export class ReporteModule { }
