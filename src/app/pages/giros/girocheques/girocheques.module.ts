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


@NgModule({
  declarations: [LayoutGirochequeComponent, ListComponent, CreateGiroComponent],
  imports: [
    CommonModule,
    GirochequesRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromGirocheques.girochequesFeatureKey, fromGirocheques.reducer),
    EffectsModule.forFeature([GirochequesEffects])
  ]
})
export class GirochequesModule { }
