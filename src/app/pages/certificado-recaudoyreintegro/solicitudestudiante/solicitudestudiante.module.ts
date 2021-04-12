import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudestudianteRoutingModule } from './solicitudestudiante-routing.module';
import { TableSolicitudesComponent } from './components/table-solicitudes/table-solicitudes.component';
import { StepperNuevasolicitudComponent } from './components/stepper-nuevasolicitud/stepper-nuevasolicitud.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatStepperModule, MatDividerModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetNuevasolicitudComponent } from './components/set-nuevasolicitud/set-nuevasolicitud.component';
import { SetDatosgeneralesComponent } from './components/set-datosgenerales/set-datosgenerales.component';
import { SetAnexosComponent } from './components/set-anexos/set-anexos.component';
import { ShowDetallesolicitudComponent } from './components/show-detallesolicitud/show-detallesolicitud.component';


@NgModule({
  declarations: [
    TableSolicitudesComponent,
    StepperNuevasolicitudComponent,
    SetNuevasolicitudComponent,
    SetDatosgeneralesComponent,
    SetAnexosComponent,
    ShowDetallesolicitudComponent],
  imports: [
    CommonModule,
    SolicitudestudianteRoutingModule,
    SharedModule,
    MatStepperModule,
    MatDividerModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SolicitudestudianteModule { }
