import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyeccionRoutingModule } from './proyeccion-routing.module';
import { TablaSolicitudesComponent } from './components/tabla-solicitudes/tabla-solicitudes.component';
import { TablaProyeccionComponent } from './components/tabla-proyeccion/tabla-proyeccion.component';
import { FormRubroPacComponent } from './components/form-rubro-pac/form-rubro-pac.component';
import { FormSolicitudPacComponent } from './components/form-solicitud-pac/form-solicitud-pac.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatSelectModule } from '@angular/material';
import { FormFuentesComponent } from './components/form-fuentes/form-fuentes.component';
import { FormProyeccionComponent } from './components/form-proyeccion/form-proyeccion.component';
import { SeleccionRubroComponent } from './components/seleccion-rubro/seleccion-rubro.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DatosPacComponent } from './components/datos-pac/datos-pac.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    TablaSolicitudesComponent,
    TablaProyeccionComponent,
    FormRubroPacComponent,
    FormSolicitudPacComponent,
    FormFuentesComponent,
    FormProyeccionComponent,
    SeleccionRubroComponent,
    DatosPacComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ProyeccionRoutingModule,
    MatDialogModule,
    CurrencyMaskModule,
    ScrollingModule,
    MatSelectModule,
  ],
  entryComponents: [
    FormSolicitudPacComponent,
    FormRubroPacComponent,
  ],
})
export class ProyeccionModule { }
