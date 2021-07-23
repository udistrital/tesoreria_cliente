import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificadoRetencionesRoutingModule } from './certificado-retenciones-routing.module';
import { CertificadoRetencionesComponent } from './certificado-retenciones.component';


@NgModule({
  declarations: [
    CertificadoRetencionesComponent
    ],
  imports: [
    CommonModule,
    CertificadoRetencionesRoutingModule
  ]
})
export class CertificadoRetencionesModule { }
