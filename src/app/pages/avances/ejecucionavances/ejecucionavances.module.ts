import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjecucionavancesRoutingModule } from './ejecucionavances-routing.module';
import { ConsolidadoComponent } from './components/consolidado/consolidado.component';
import { EjecucionComponent } from './components/ejecucion/ejecucion.component';
import { InformeComponent } from './components/informe/informe.component';
import { LayoutEjecucionComponent } from './components/layout-ejecucion/layout-ejecucion.component';
import { PdfviewComponent } from './components/pdfview/pdfview.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SharedModule } from '../../../shared/shared.module';
import { ExporterService } from './services/exporter.service';
import { ModalEjecucionComponent } from './components/modal-ejecucion/modal-ejecucion.component';
import { StoreModule } from '@ngrx/store';
import * as fromEjecucion from './reducers/ejecucion.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EjecucionEffects } from './effects/ejecucion.effects';

@NgModule({
  declarations: [ConsolidadoComponent, EjecucionComponent, InformeComponent, LayoutEjecucionComponent, PdfviewComponent, ModalEjecucionComponent],
  imports: [
    CommonModule,
    EjecucionavancesRoutingModule,
    PdfViewerModule,
    SharedModule,
    StoreModule.forFeature(fromEjecucion.ejecucionFeatureKey, fromEjecucion.reducer),
    EffectsModule.forFeature([EjecucionEffects])
  ],
  providers: [ExporterService],
})
export class EjecucionavancesModule { }
