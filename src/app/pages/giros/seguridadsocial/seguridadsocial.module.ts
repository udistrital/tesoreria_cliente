import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadsocialRoutingModule } from './seguridadsocial-routing.module';
import { ContabilizacionComponent } from './components/contabilizacion/contabilizacion.component';
import { CrearGiroComponent } from './components/crear-giro/crear-giro.component';
import { LayoutSeguridadsocialComponent } from './components/layout-seguridadsocial/layout-seguridadsocial.component';
import { SetInformacionComponent } from './components/set-informacion/set-informacion.component';
import { SetRelacionesComponent } from './components/set-relaciones/set-relaciones.component';
import { SetRubrosComponent } from './components/set-rubros/set-rubros.component';
import { SetErogacionComponent } from './components/set-erogacion/set-erogacion.component';
import { ListaSeguridadComponent } from './components/lista-seguridad/lista-seguridad.component';
import { StoreModule } from '@ngrx/store';
import * as fromSeguridadSocial from './reducers/seguridad-social.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SeguridadSocialEffects } from './effects/seguridad-social.effects';
import { SharedModule } from '../../../shared/shared.module';
import { MatDialogModule, MatStepperModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SetResumenComponent } from './components/set-resumen/set-resumen.component';

@NgModule({
  declarations: [ContabilizacionComponent,
    CrearGiroComponent,
    LayoutSeguridadsocialComponent,
    SetInformacionComponent,
    SetRelacionesComponent,
    SetRubrosComponent,
    SetErogacionComponent,
    ListaSeguridadComponent,
    SetResumenComponent ],
  imports: [
    CommonModule,
    SeguridadsocialRoutingModule,
    SharedModule,
    MatStepperModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromSeguridadSocial.seguridadSocialFeatureKey, fromSeguridadSocial.reducer),
    EffectsModule.forFeature([SeguridadSocialEffects])
  ]
})
export class SeguridadsocialModule { }
