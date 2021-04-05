import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeclaracionRetencionesRoutingModule } from './declaracion-retenciones-routing.module';
import { TableDeclaracionesComponent } from './components/table-declaraciones/table-declaraciones.component';
import { SetStepperdeclaracionComponent } from './components/set-stepperdeclaracion/set-stepperdeclaracion.component';
import { SharedModule } from '../../shared/shared.module';
import { SetDatosdeclaracionComponent } from './components/set-datosdeclaracion/set-datosdeclaracion.component';
import { SetDetalledeclaracionComponent } from './components/set-detalledeclaracion/set-detalledeclaracion.component';
import { SetResumendeclaracionComponent } from './components/set-resumendeclaracion/set-resumendeclaracion.component';
import { MatStepperModule, MatDividerModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetConciliaciondeclaracionComponent } from './components/set-conciliaciondeclaracion/set-conciliaciondeclaracion.component';
// import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

@NgModule({
  declarations: [
    TableDeclaracionesComponent,
    SetStepperdeclaracionComponent,
    SetDatosdeclaracionComponent,
    SetDetalledeclaracionComponent,
    SetResumendeclaracionComponent,
    SetConciliaciondeclaracionComponent
  ],
  imports: [
    CommonModule,
    DeclaracionRetencionesRoutingModule,
    SharedModule,
    MatStepperModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    // RxReactiveFormsModule
  ]
})
export class DeclaracionRetencionesModule { }
