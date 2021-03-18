import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudavancesRoutingModule } from './solicitudavances-routing.module';
import { TableSolicitudavancesComponent } from './components/table-solicitudavances/table-solicitudavances.component';
import { StepperSolicitudavancesComponent } from './components/stepper-solicitudavances/stepper-solicitudavances.component';
import { SetInfofuncionarioComponent } from './components/set-infofuncionario/set-infofuncionario.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatStepperModule, MatDividerModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetDescripcionComponent } from './components/set-descripcion/set-descripcion.component';
import { SetTipoavanceComponent } from './components/set-tipoavance/set-tipoavance.component';
import { ShowDetalleavanceComponent } from './components/show-detalleavance/show-detalleavance.component';
import { StoreModule } from '@ngrx/store';
import * as fromSolicitudesAvance from './reducers/solicitudavances.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SolicitudAvancesEffects } from './effects/solicitudavances.effects';



@NgModule({
  declarations: [TableSolicitudavancesComponent,
    StepperSolicitudavancesComponent,
    SetInfofuncionarioComponent,
    SetDescripcionComponent,
    SetTipoavanceComponent,
    ShowDetalleavanceComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatStepperModule,
    MatDividerModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SolicitudavancesRoutingModule,
    StoreModule.forFeature(fromSolicitudesAvance.solicitudavancesFeatureKey, fromSolicitudesAvance.reducer),
    EffectsModule.forFeature([SolicitudAvancesEffects])
  ]
})
export class SolicitudavancesModule { }
