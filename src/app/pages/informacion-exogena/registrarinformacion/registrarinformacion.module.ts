import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarinformacionRoutingModule } from './registrarinformacion-routing.module';
import { TableInfoexogenaComponent } from './components/table-infoexogena/table-infoexogena.component';
import { SetElegirentidadComponent } from './components/set-elegirentidad/set-elegirentidad.component';
import { StepperRegistroComponent } from './components/stepper-registro/stepper-registro.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatStepperModule, MatDividerModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetDatosregistroComponent } from './components/set-datosregistro/set-datosregistro.component';
import { SetConsultainformacionComponent } from './components/set-consultainformacion/set-consultainformacion.component';
import { SetConsultatercerosComponent } from './components/set-consultaterceros/set-consultaterceros.component';


@NgModule({
  declarations: [
    TableInfoexogenaComponent,
    SetElegirentidadComponent,
    StepperRegistroComponent,
    SetDatosregistroComponent,
    SetConsultainformacionComponent,
    SetConsultatercerosComponent
  ],
  imports: [
    CommonModule,
    RegistrarinformacionRoutingModule,
    SharedModule,
    MatStepperModule,
    MatDividerModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistrarinformacionModule { }
