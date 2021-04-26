import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificadoRecaudoyreintegroComponent } from './certificado-recaudoyreintegro.component';
import { CertificadoRecaudoyreintegroRoutingModule } from './certificado-recaudoyreintegro-routing.module';


@NgModule({
  declarations: [
    CertificadoRecaudoyreintegroComponent,
  ],
  imports: [
    CommonModule,
    CertificadoRecaudoyreintegroRoutingModule
  ]
})
export class CertificadoRecaudoyreintegroModule { }
