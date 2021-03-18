import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReintegrosRoutingModule } from './reintegros-routing.module';
import { TableLegalizacionReintegrosComponent } from './components/table-legalizacion-reintegros/table-legalizacion-reintegros.component';
import { StepperReintegrosComponent } from './components/stepper-reintegros/stepper-reintegros.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatStepperModule, MatDividerModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetInforeintegroComponent } from './components/set-inforeintegro/set-inforeintegro.component';
import { SetInfoafectacionComponent } from './components/set-infoafectacion/set-infoafectacion.component';
import { SetContabilizacionComponent } from './components/set-contabilizacion/set-contabilizacion.component';
import { ShowDetallereintegroComponent } from './components/show-detallereintegro/show-detallereintegro.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SetPdfviewComponent } from './components/set-pdfview/set-pdfview.component';
import { SetDescargarcomprobanteComponent } from './components/set-descargarcomprobante/set-descargarcomprobante.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [TableLegalizacionReintegrosComponent,
    StepperReintegrosComponent,
    SetInforeintegroComponent,
    SetInfoafectacionComponent,
    SetContabilizacionComponent,
    SetPdfviewComponent,
    SetDescargarcomprobanteComponent,
    ShowDetallereintegroComponent],
  imports: [
    CommonModule,
    ReintegrosRoutingModule,
    SharedModule,
    MatStepperModule,
    MatDividerModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule,
    CurrencyMaskModule
  ]
})
export class ReintegrosModule { }
