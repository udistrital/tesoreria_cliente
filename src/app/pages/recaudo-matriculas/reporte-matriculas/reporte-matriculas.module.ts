import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteMatriculasRoutingModule } from './reporte-matriculas-routing.module';
import { TablaReporteMatriculasComponent } from './components/tabla-reporte-matriculas/tabla-reporte-matriculas.component';
import { DetalleReporteMatriculasComponent } from './components/detalle-reporte-matriculas/detalle-reporte-matriculas.component';
import { ModalRegistroComponent } from './components/modal-registro/modal-registro.component';
import { ModalCuotaComponent } from './components/modal-cuota/modal-cuota.component';


@NgModule({
  declarations: [TablaReporteMatriculasComponent, DetalleReporteMatriculasComponent, ModalRegistroComponent, ModalCuotaComponent],
  imports: [
    CommonModule,
    ReporteMatriculasRoutingModule
  ]
})
export class ReporteMatriculasModule { }
