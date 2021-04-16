import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaOrdenesPagoComponent } from './components/consulta-ordenes-pago/consulta-ordenes-pago.component';
import { RespuestaSolicitudComponent } from './components/respuesta-solicitud/respuesta-solicitud.component';
import { SolicitudReactivacionComponent } from './components/solicitud-reactivacion/solicitud-reactivacion.component';
import { TablaSolicitudesComponent } from './components/tabla-solicitudes/tabla-solicitudes.component';


const routes: Routes = [
  {
    path: 'solicitud-reactivacion-pago',
    component: SolicitudReactivacionComponent,
  },
  {
    path: 'tabla-solicitudes',
    component: TablaSolicitudesComponent,
  },
  {
    path: 'respuesta-solicitud',
    component: RespuestaSolicitudComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactivacionPagosRoutingModule { }
