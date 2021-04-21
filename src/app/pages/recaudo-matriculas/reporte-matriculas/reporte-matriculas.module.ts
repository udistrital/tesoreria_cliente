import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteMatriculasRoutingModule } from './reporte-matriculas-routing.module';
import { TablaReporteMatriculasComponent } from './components/tabla-reporte-matriculas/tabla-reporte-matriculas.component';
import { DetalleReporteMatriculasComponent } from './components/detalle-reporte-matriculas/detalle-reporte-matriculas.component';
import { ModalRegistroComponent } from './components/modal-registro/modal-registro.component';
import { ModalCuotaComponent } from './components/modal-cuota/modal-cuota.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatSelectModule } from '@angular/material';
import { NbDatepickerModule } from '@nebular/theme';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    TablaReporteMatriculasComponent,
    DetalleReporteMatriculasComponent,
    ModalRegistroComponent,
    ModalCuotaComponent
  ],
  imports: [
    CommonModule,
    ReporteMatriculasRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    CurrencyMaskModule,
    ScrollingModule,
    MatSelectModule,
    NbDatepickerModule,
  ],
  entryComponents: [
    ModalRegistroComponent,
    ModalCuotaComponent,
  ]
})
export class ReporteMatriculasModule { }
