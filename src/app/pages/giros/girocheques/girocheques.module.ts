import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GirochequesRoutingModule } from './girocheques-routing.module';
import { LayoutGirochequeComponent } from './components/layout-girocheque/layout-girocheque.component';
import { ListComponent } from './components/list/list.component';
import { CreateGiroComponent } from './components/create-giro/create-giro.component';
import { SharedModule } from '../../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromGirocheques from './reducers/girocheques.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GirochequesEffects } from './effects/girocheques.effects';
import { SetDetallegiroComponent } from './components/set-detallegiro/set-detallegiro.component';
import { SetErogacionComponent } from './components/set-erogacion/set-erogacion.component';
import { SetContabilizacionComponent } from './components/set-contabilizacion/set-contabilizacion.component';
import { MatStepperModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SetResumenComponent } from './components/set-resumen/set-resumen.component';
@NgModule({
  declarations: [LayoutGirochequeComponent, ListComponent, CreateGiroComponent, SetDetallegiroComponent, SetErogacionComponent, SetContabilizacionComponent, SetResumenComponent],
  imports: [
    CommonModule,
    GirochequesRoutingModule,
    SharedModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromGirocheques.girochequesFeatureKey, fromGirocheques.reducer),
    EffectsModule.forFeature([GirochequesEffects])
  ]
})
export class GirochequesModule { }
