import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValorizacionRoutingModule } from './valorizacion-routing.module';
import { TableOtrasentidaesComponent } from './components/table-otrasentidaes/table-otrasentidaes.component';
// import { StepperRegistroComponent } from './components/stepper-registro/stepper-registro.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatStepperModule, MatDividerModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroinicialComponent } from './components/registroinicial/registroinicial.component';



@NgModule({
  declarations: [TableOtrasentidaesComponent, RegistroinicialComponent],
  imports: [
    CommonModule,
    ValorizacionRoutingModule,
    SharedModule,
    MatStepperModule,
    MatDividerModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ValorizacionModule { }
