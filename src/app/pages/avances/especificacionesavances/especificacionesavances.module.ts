import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecificacionesavancesRoutingModule } from './especificacionesavances-routing.module';
import { ListaEspecificacionesavancesComponent } from './components/lista-especificacionesavances/lista-especificacionesavances.component';
import { SetEspecificacionavancesComponent } from './components/set-especificacionavances/set-especificacionavances.component';
import { SharedModule } from '../../../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { EspecificacionesavancesEffects } from './effects/especificacionesavances.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import * as fromEspecificacionesavances from './reducers/especificacionesavances.reducer';


@NgModule({
  declarations: [ListaEspecificacionesavancesComponent, SetEspecificacionavancesComponent],
  imports: [
    CommonModule,
    EspecificacionesavancesRoutingModule,
    SharedModule,
    EffectsModule.forFeature([EspecificacionesavancesEffects]),
    StoreModule.forFeature(fromEspecificacionesavances.especificacionesavancesFeatureKey, fromEspecificacionesavances.reducer),
    ReactiveFormsModule,
    NgbModule
  ]
})
export class EspecificacionesavancesModule { }
