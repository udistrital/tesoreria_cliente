import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresosRoutingModule } from './ingresos-routing.module';
import { ListaIngresosComponent } from './components/lista-ingresos/lista-ingresos.component';
import { LayoutIngresosComponent } from './components/layout-ingresos/layout-ingresos.component';
import { CrearIngresosComponent } from './components/crear-ingresos/crear-ingresos.component';
import { SetInicioComponent } from './components/set-inicio/set-inicio.component';
import { SetConsignacionesComponent } from './components/set-consignaciones/set-consignaciones.component';
import { SetAfectacionComponent } from './components/set-afectacion/set-afectacion.component';
import { SetContabilizarComponent } from './components/set-contabilizar/set-contabilizar.component';
import { SetIdentificarComponent } from './components/set-identificar/set-identificar.component';
import { SharedModule } from '../../shared/shared.module';
import { MatStepperModule, MatDialogModule, MatOptionModule, MatSelectModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromIngresos from './reducers/ingresos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { IngresosEffects } from './effects/ingresos.effects';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [ListaIngresosComponent,
    LayoutIngresosComponent,
    CrearIngresosComponent,
    SetInicioComponent,
    SetConsignacionesComponent,
    SetAfectacionComponent,
    SetContabilizarComponent,
    SetIdentificarComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatSelectModule,
    MatFormFieldModule,
    MatStepperModule,
    MatDialogModule,
    MatOptionModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    IngresosRoutingModule,
    PdfViewerModule,
    StoreModule.forFeature(fromIngresos.ingresosFeatureKey, fromIngresos.reducer),
    EffectsModule.forFeature([IngresosEffects])
  ]
})
export class IngresosModule { }
