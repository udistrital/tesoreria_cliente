import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerarcertificadoRoutingModule } from './generarcertificado-routing.module';
import { TableConsultainformeComponent } from './components/table-consultainforme/table-consultainforme.component';
import { SetConsultasolicitanteComponent } from './components/set-consultasolicitante/set-consultasolicitante.component';
import { SetGenerarcertificadoComponent } from './components/set-generarcertificado/set-generarcertificado.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatStepperModule, MatDividerModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TableConsultainformeComponent,
    SetConsultasolicitanteComponent,
    SetGenerarcertificadoComponent
  ],
  imports: [
    CommonModule,
    GenerarcertificadoRoutingModule,
    SharedModule,
    MatStepperModule,
    MatDividerModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GenerarcertificadoModule { }
