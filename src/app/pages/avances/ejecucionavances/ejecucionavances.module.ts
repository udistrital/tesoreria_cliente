import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjecucionavancesRoutingModule } from './ejecucionavances-routing.module';
import { ConsolidadoComponent } from './components/consolidado/consolidado.component';
import { EjecucionComponent } from './components/ejecucion/ejecucion.component';
import { InformeComponent } from './components/informe/informe.component';
import { LayoutEjecucionComponent } from './components/layout-ejecucion/layout-ejecucion.component';
import { PdfviewComponent } from './components/pdfview/pdfview.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [ConsolidadoComponent, EjecucionComponent, InformeComponent, LayoutEjecucionComponent, PdfviewComponent],
  imports: [
    CommonModule,
    EjecucionavancesRoutingModule,
    PdfViewerModule
  ]
})
export class EjecucionavancesModule { }
