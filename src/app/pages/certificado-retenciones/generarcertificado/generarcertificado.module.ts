import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerarcertificadoRoutingModule } from './generarcertificado-routing.module';
import { TableConsultainformeComponent } from './components/table-consultainforme/table-consultainforme.component';
import { SetConsultasolicitanteComponent } from './components/set-consultasolicitante/set-consultasolicitante.component';
import { SetGenerarcertificadoComponent } from './components/set-generarcertificado/set-generarcertificado.component';


@NgModule({
  declarations: [TableConsultainformeComponent, SetConsultasolicitanteComponent, SetGenerarcertificadoComponent],
  imports: [
    CommonModule,
    GenerarcertificadoRoutingModule
  ]
})
export class GenerarcertificadoModule { }
