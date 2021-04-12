import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AprobarsolicitudRoutingModule } from './aprobarsolicitud-routing.module';
import { TableAprobacionesComponent } from './components/table-aprobaciones/table-aprobaciones.component';
import { SetConsultayaprobacionComponent } from './components/set-consultayaprobacion/set-consultayaprobacion.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatDividerModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TableAprobacionesComponent,
    SetConsultayaprobacionComponent],
  imports: [
    CommonModule,
    AprobarsolicitudRoutingModule,
    SharedModule,
    MatDividerModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AprobarsolicitudModule { }
