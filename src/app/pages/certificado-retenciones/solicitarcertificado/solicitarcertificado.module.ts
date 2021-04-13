import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitarcertificadoRoutingModule } from './solicitarcertificado-routing.module';
import { SolicitarcertificadoComponent } from './components/solicitarcertificado/solicitarcertificado.component';
import { TableRetencionesComponent } from './components/table-retenciones/table-retenciones.component';
import { SetCertificadoComponent } from './components/set-certificado/set-certificado.component';


@NgModule({
  declarations: [SolicitarcertificadoComponent, TableRetencionesComponent, SetCertificadoComponent],
  imports: [
    CommonModule,
    SolicitarcertificadoRoutingModule
  ]
})
export class SolicitarcertificadoModule { }
