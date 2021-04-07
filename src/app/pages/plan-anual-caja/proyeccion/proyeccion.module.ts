import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyeccionRoutingModule } from './proyeccion-routing.module';
import { TablaSolicitudesComponent } from './components/tabla-solicitudes/tabla-solicitudes.component';
import { TablaProyeccionComponent } from './components/tabla-proyeccion/tabla-proyeccion.component';
import { FormRubroPacComponent } from './components/form-rubro-pac/form-rubro-pac.component';
import { FormSolicitudPacComponent } from './components/form-solicitud-pac/form-solicitud-pac.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    TablaSolicitudesComponent,
    TablaProyeccionComponent,
    FormRubroPacComponent,
    FormSolicitudPacComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ProyeccionRoutingModule,
    MatDialogModule,
  ],
  entryComponents: [
    FormSolicitudPacComponent,
    FormRubroPacComponent,
  ],
})
export class ProyeccionModule { }
