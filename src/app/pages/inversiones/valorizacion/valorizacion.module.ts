import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValorizacionRoutingModule } from './valorizacion-routing.module';
import { TableOtrasentidadesComponent } from './components/table-otrasentidades/table-otrasentidades.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatStepperModule, MatDividerModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroinicialComponent } from './components/registroinicial/registroinicial.component';
import { StepperValorizacionComponent } from './components/stepper-valorizacion/stepper-valorizacion.component';
import { SetInforegistroComponent } from './components/set-inforegistro/set-inforegistro.component';
import { SetDatosvalorizacionComponent } from './components/set-datosvalorizacion/set-datosvalorizacion.component';
import { SetContabilizacionComponent } from './components/set-contabilizacion/set-contabilizacion.component';
import { ShowDetallevalorizacionComponent } from './components/show-detallevalorizacion/show-detallevalorizacion.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';


@NgModule({
  declarations: [
    TableOtrasentidadesComponent,
    RegistroinicialComponent,
    StepperValorizacionComponent,
    SetInforegistroComponent,
    SetDatosvalorizacionComponent,
    SetContabilizacionComponent,
    ShowDetallevalorizacionComponent
  ],
  imports: [
    CommonModule,
    ValorizacionRoutingModule,
    SharedModule,
    MatStepperModule,
    MatDividerModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    CurrencyMaskModule
  ]
})
export class ValorizacionModule { }
