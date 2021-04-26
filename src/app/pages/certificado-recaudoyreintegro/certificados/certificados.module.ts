import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificadosRoutingModule } from './certificados-routing.module';
import { TableCertificadosComponent } from './components/table-certificados/table-certificados.component';
import { SetGenerarcertificadoComponent } from './components/set-generarcertificado/set-generarcertificado.component';
import { StepperCertificacionesComponent } from './components/stepper-certificaciones/stepper-certificaciones.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatStepperModule, MatDividerModule } from '@angular/material';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetConsultaingresosComponent } from './components/set-consultaingresos/set-consultaingresos.component';
import { SetResumencertificadoComponent } from './components/set-resumencertificado/set-resumencertificado.component';


@NgModule({
  declarations: [
    TableCertificadosComponent,
    SetGenerarcertificadoComponent,
    StepperCertificacionesComponent,
    SetConsultaingresosComponent,
    SetResumencertificadoComponent],
  imports: [
    CommonModule,
    CertificadosRoutingModule,
    SharedModule,
    MatStepperModule,
    MatDividerModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CertificadosModule { }
