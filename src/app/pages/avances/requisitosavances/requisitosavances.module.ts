import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequisitosavancesRoutingModule } from './requisitosavances-routing.module';
import { ListaRequisitosavancesComponent } from './components/lista-requisitosavances/lista-requisitosavances.component';
import { SetRequisitoavancesComponent } from './components/set-requisitoavances/set-requisitoavances.component';
import { SharedModule } from '../../../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { RequisitosavancesEffects } from './effects/requisitosavances.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import * as fromRequisitosavances from './reducers/requisitosavances.reducer';


@NgModule({
  declarations: [ListaRequisitosavancesComponent, SetRequisitoavancesComponent],
  imports: [
    CommonModule,
    RequisitosavancesRoutingModule,
    SharedModule,
    EffectsModule.forFeature([RequisitosavancesEffects]),
    StoreModule.forFeature(fromRequisitosavances.requisitosavancesFeatureKey, fromRequisitosavances.reducer),
    ReactiveFormsModule,
    NgbModule
  ]
})
export class RequisitosavancesModule { }
