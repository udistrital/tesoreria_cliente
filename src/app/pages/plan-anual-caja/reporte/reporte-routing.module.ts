import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportePacComponent } from './components/reporte-pac/reporte-pac.component';
import { RevisionReportePacComponent } from './components/revision-reporte-pac/revision-reporte-pac.component';
import { TablaReportePacComponent } from './components/tabla-reporte-pac/tabla-reporte-pac.component';


const routes: Routes = [
  {
    path: 'reporte-pac',
    component: ReportePacComponent
  },
  {
    path: 'revision-reporte-pac',
    component: RevisionReportePacComponent
  },
  {
    path: 'tabla-reporte-pac',
    component: TablaReportePacComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteRoutingModule { }
