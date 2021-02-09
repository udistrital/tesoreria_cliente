import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReintegrosRoutingModule } from './reintegros-routing.module';
import { TableLegalizacionReintegrosComponent } from './components/table-legalizacion-reintegros/table-legalizacion-reintegros.component';
import { StepperReintegrosComponent } from './components/stepper-reintegros/stepper-reintegros.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatStepperModule, MatDividerModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TableLegalizacionReintegrosComponent, StepperReintegrosComponent],
  imports: [
    CommonModule,
    ReintegrosRoutingModule,
    SharedModule,
    MatStepperModule,
    MatDividerModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ReintegrosModule { }
