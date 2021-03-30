import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdquisicionRoutingModule } from './adquisicion-routing.module';
import { TableInversionfinancieraComponent } from './components/table-inversionfinanciera/table-inversionfinanciera.component';
import { StepperRegistroComponent } from './components/stepper-registro/stepper-registro.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatStepperModule, MatDividerModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetProcesoadquisicionComponent } from './components/set-procesoadquisicion/set-procesoadquisicion.component';
import { SetInfoinversioninicialComponent } from './components/set-infoinversioninicial/set-infoinversioninicial.component';
import { SetContabilizacionComponent } from './components/set-contabilizacion/set-contabilizacion.component';
import { ShowDetalleadquisicionComponent } from './components/show-detalleadquisicion/show-detalleadquisicion.component';



@NgModule({
  declarations: [
    TableInversionfinancieraComponent,
    StepperRegistroComponent,
    SetProcesoadquisicionComponent,
    SetInfoinversioninicialComponent,
    SetContabilizacionComponent,
    ShowDetalleadquisicionComponent
  ],
  imports: [
    CommonModule,
    AdquisicionRoutingModule,
    SharedModule,
    MatStepperModule,
    MatDividerModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdquisicionModule { }
