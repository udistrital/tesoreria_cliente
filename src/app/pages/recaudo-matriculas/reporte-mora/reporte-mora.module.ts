import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteMoraRoutingModule } from './reporte-mora-routing.module';
import { ConsultaGeneralMoraComponent } from './components/consulta-general-mora/consulta-general-mora.component';
import { TablaGeneralMoraComponent } from './components/tabla-general-mora/tabla-general-mora.component';
import { DetalleGeneralMoraComponent } from './components/detalle-general-mora/detalle-general-mora.component';


@NgModule({
  declarations: [ConsultaGeneralMoraComponent, TablaGeneralMoraComponent, DetalleGeneralMoraComponent],
  imports: [
    CommonModule,
    ReporteMoraRoutingModule
  ]
})
export class ReporteMoraModule { }
