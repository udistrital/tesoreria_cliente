import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultarinformacionRoutingModule } from './consultarinformacion-routing.module';
import { BusquedaindividualComponent } from './components/busquedaindividual/busquedaindividual.component';
import { MatDividerModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BusquedaindividualComponent
  ],
  imports: [
    CommonModule,
    ConsultarinformacionRoutingModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class ConsultarinformacionModule { }
