import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AprobarsolicitudRoutingModule } from './aprobarsolicitud-routing.module';
import { TableSolicitudesComponent } from './components/table-solicitudes/table-solicitudes.component';
import { SetConsultayaprobacionComponent } from './components/set-consultayaprobacion/set-consultayaprobacion.component';


@NgModule({
  declarations: [TableSolicitudesComponent, SetConsultayaprobacionComponent],
  imports: [
    CommonModule,
    AprobarsolicitudRoutingModule
  ]
})
export class AprobarsolicitudModule { }
