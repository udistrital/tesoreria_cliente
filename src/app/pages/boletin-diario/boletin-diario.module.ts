import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoletinDiarioRoutingModule } from './boletin-diario-routing.module';
import { ListComponent } from './components/list/list.component';
import { CrearBoletinComponent } from './components/crear-boletin/crear-boletin.component';
import { LayoutBoletinComponent } from './components/layout-boletin/layout-boletin.component';
import { SetInformacionComponent } from './components/set-informacion/set-informacion.component';
import { SetBorradorComponent } from './components/set-borrador/set-borrador.component';
import { SetConcentracionComponent } from './components/set-concentracion/set-concentracion.component';
import { SetDiferenciasComponent } from './components/set-diferencias/set-diferencias.component';
import { FirmasComponent } from './components/firmas/firmas.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PdfviewComponent } from './components/pdfview/pdfview.component';
import * as fromBoletinDiario from './reducers/boletin-diario.reducer';
import { BoletinDiarioEffects } from './effects/boletin-diario.effects';
import { SharedModule } from '../../shared/shared.module';
import { MatStepperModule, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [ListComponent,
    CrearBoletinComponent,
    LayoutBoletinComponent,
    SetInformacionComponent,
    SetBorradorComponent,
    SetConcentracionComponent,
    SetDiferenciasComponent,
    FirmasComponent,
    PdfviewComponent],
  imports: [
    CommonModule,
    BoletinDiarioRoutingModule,
    SharedModule,
    MatStepperModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule,
    StoreModule.forFeature(fromBoletinDiario.boletinDiarioFeatureKey, fromBoletinDiario.reducer),
    EffectsModule.forFeature([BoletinDiarioEffects]),
  ]
})
export class BoletinDiarioModule { }
