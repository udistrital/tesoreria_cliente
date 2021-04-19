import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaMatriculasRoutingModule } from './consulta-matriculas-routing.module';
import { ConsultaGeneralComponent } from './components/consulta-general/consulta-general.component';
import { TablaConsultaComponent } from './components/tabla-consulta/tabla-consulta.component';
import { ContabilizacionComponent } from './components/contabilizacion/contabilizacion.component';


@NgModule({
  declarations: [ConsultaGeneralComponent, TablaConsultaComponent, ContabilizacionComponent],
  imports: [
    CommonModule,
    ConsultaMatriculasRoutingModule
  ]
})
export class ConsultaMatriculasModule { }
