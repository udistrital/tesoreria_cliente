import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitarcertificadoRoutingModule } from './solicitarcertificado-routing.module';
import { TableRetencionesComponent } from './components/table-retenciones/table-retenciones.component';
import { SetCertificadoComponent } from './components/set-certificado/set-certificado.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatStepperModule, MatDividerModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TableRetencionesComponent,
    SetCertificadoComponent
  ],
  imports: [
    CommonModule,
    SolicitarcertificadoRoutingModule,
    SharedModule,
    MatDividerModule,
    MatStepperModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SolicitarcertificadoModule { }
