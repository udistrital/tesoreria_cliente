import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposavancesRoutingModule } from './tiposavances-routing.module';
import { TableTiposavancesComponent } from './components/table-tiposavances/table-tiposavances.component';
import { SharedModule } from '../../../shared/shared.module';
import * as fromTiposavances from './reducers/tiposavances.reducer';
import { SetTipodeavanceComponent } from './components/set-tipodeavance/set-tipodeavance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalConfig, NgbModal, NgbModule, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatDividerModule, MatStepperModule } from '@angular/material';
import { SetAsociarrequisitoComponent } from './components/set-asociarrequisito/set-asociarrequisito.component';




@NgModule({
  declarations: [TableTiposavancesComponent,
                SetTipodeavanceComponent,
                SetAsociarrequisitoComponent],
  imports: [
    CommonModule,
    TiposavancesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatDividerModule,
    StoreModule.forFeature(fromTiposavances.tiposavancesFeatureKey, fromTiposavances.reducer),
    // EffectsModule.forFeature([TiposavancesEffects])
  ]
})
export class TiposavancesModule { }
