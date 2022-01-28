import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConceptosRoutingModule } from './conceptos-routing.module';
import { TableConceptosComponent } from './components/table-conceptos/table-conceptos.component';
import { CreateConceptosComponent } from './components/create-conceptos/create-conceptos.component';
import { SharedModule } from '../../shared/shared.module';
import { MatCheckboxModule, MatDividerModule, MatOptionModule, MatSelectModule, MatSlideToggleModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import * as fromConceptos from './reducers/conceptos.reducer';
import {
    NbTreeGridModule,
    NbSelectModule,
    NbAlertModule,
    NbTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbTooltipModule,
    NbRadioModule,
    NbCheckboxModule,
    NbButtonModule,
    NbInputModule,
    NbListModule,
    NbDialogModule,
    NbBadgeModule, } from '@nebular/theme';
import { StoreModule } from '@ngrx/store';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ConceptosEffects } from './effects/conceptos.effects';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [CreateConceptosComponent, TableConceptosComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    NbTreeGridModule,
    NbTooltipModule,
    NbSelectModule,
    NbRadioModule,
    NbAlertModule,
    NbCheckboxModule,
    NbTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbInputModule,
    NbListModule,
    NbBadgeModule,
    NbDialogModule,
    NbButtonModule,
    StoreModule.forFeature(fromConceptos.conceptosFeatureKey, fromConceptos.reducer),
    ScrollingModule,
    ConceptosRoutingModule,
    EffectsModule.forFeature([ConceptosEffects]),
  ]
})
export class ConceptosModule { }
