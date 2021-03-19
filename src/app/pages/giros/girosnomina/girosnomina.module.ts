import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GirosnominaRoutingModule } from './girosnomina-routing.module';
import { ListaComponent } from './components/lista/lista.component';
import { CrearGiroComponent } from './components/crear-giro/crear-giro.component';
import { SetInformacionComponent } from './components/set-informacion/set-informacion.component';
import { SetRelacionesComponent } from './components/set-relaciones/set-relaciones.component';
import { SetErogacionComponent } from './components/set-erogacion/set-erogacion.component';
import { SetResumenComponent } from './components/set-resumen/set-resumen.component';
import { ContabilizacionComponent } from './components/contabilizacion/contabilizacion.component';
import { SetContabilizacionComponent } from './components/set-contabilizacion/set-contabilizacion.component';
import { SetErogacioncontabilizacionComponent } from './components/set-erogacioncontabilizacion/set-erogacioncontabilizacion.component';
import { SetErogresumenabilizacionComponent } from './components/set-erogresumenabilizacion/set-erogresumenabilizacion.component';
import { LayoutGironominaComponent } from './components/layout-gironomina/layout-gironomina.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatDialogModule, MatStepperModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromGirosnomina from './reducers/girosnomina.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GirosnominaEffects } from './effects/girosnomina.effects';


@NgModule({
  declarations: [ListaComponent,
    CrearGiroComponent,
    SetInformacionComponent,
    SetRelacionesComponent,
    SetErogacionComponent,
    SetResumenComponent,
    ContabilizacionComponent,
    SetContabilizacionComponent,
    SetErogacioncontabilizacionComponent,
    SetErogresumenabilizacionComponent,
    LayoutGironominaComponent ],
  imports: [
    CommonModule,
    SharedModule,
    MatStepperModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    GirosnominaRoutingModule,
    StoreModule.forFeature(fromGirosnomina.girosnominaFeatureKey, fromGirosnomina.reducer),
    EffectsModule.forFeature([GirosnominaEffects])
  ]
})
export class GirosnominaModule { }
