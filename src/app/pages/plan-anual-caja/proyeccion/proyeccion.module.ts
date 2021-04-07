import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyeccionRoutingModule } from './proyeccion-routing.module';
import { TablaSolicitudesComponent } from './tabla-solicitudes/tabla-solicitudes.component';
import { TablaProyeccionComponent } from './tabla-proyeccion/tabla-proyeccion.component';
import { FormRubroPacComponent } from './form-rubro-pac/form-rubro-pac.component';
import { FormSolicitudPacComponent } from './form-solicitud-pac/form-solicitud-pac.component';


@NgModule({
  declarations: [TablaSolicitudesComponent, TablaProyeccionComponent, FormRubroPacComponent, FormSolicitudPacComponent],
  imports: [
    CommonModule,
    ProyeccionRoutingModule
  ]
})
export class ProyeccionModule { }
