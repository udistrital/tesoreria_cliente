import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaRoutingModule } from './consulta-routing.module';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { SharedModule } from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import * as fromConsulta from './reducers/consulta.reducer';
import { ConsultaEffects } from './effects/consulta.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ConsultaRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromConsulta.consultaFeatureKey, fromConsulta.reducer),
    EffectsModule.forFeature([ConsultaEffects])
  ]
})
export class ConsultaModule { }
