import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalizacionavanceRoutingModule } from './legalizacionavance-routing.module';
import { ListaLegalizacionesComponent } from './components/lista-legalizaciones/lista-legalizaciones.component';
import { SetLegalizacionComponent } from './components/set-legalizacion/set-legalizacion.component';
import { SharedModule } from '../../../shared/shared.module';
import { SetInforesponsableComponent } from './components/set-inforesponsable/set-inforesponsable.component';
import { SetInfolegalizacionComponent } from './components/set-infolegalizacion/set-infolegalizacion.component';
import { SetPracticasacademicasComponent } from './components/set-practicasacademicas/set-practicasacademicas.component';
import { ShowResumenComponent } from './components/show-resumen/show-resumen.component';
import { MatStepperModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { LegalizacionavanceEffects } from './effects/legalizacionavance.effects';
import { StoreModule } from '@ngrx/store';
import * as fromLegalizacionavance from './reducers/legalizacionavance.reducer';


@NgModule({
  declarations: [ListaLegalizacionesComponent, SetLegalizacionComponent, SetInforesponsableComponent, SetInfolegalizacionComponent, SetPracticasacademicasComponent, ShowResumenComponent],
  imports: [
    CommonModule,
    LegalizacionavanceRoutingModule,
    SharedModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([LegalizacionavanceEffects]),
    StoreModule.forFeature(fromLegalizacionavance.legalizacionavanceFeatureKey, fromLegalizacionavance.reducer),
  ]
})
export class LegalizacionavanceModule { }
