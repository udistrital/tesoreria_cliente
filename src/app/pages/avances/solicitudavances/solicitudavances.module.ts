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




@NgModule({
  declarations: [TableSolicitudavancesComponent,
    StepperSolicitudavancesComponent,
    SetInfofuncionarioComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatStepperModule,
    MatDividerModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SolicitudavancesRoutingModule
  ]
})
export class SolicitudavancesModule { }
