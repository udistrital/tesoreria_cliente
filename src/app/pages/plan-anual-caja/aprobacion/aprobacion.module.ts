import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AprobacionRoutingModule } from './aprobacion-routing.module';
import { AprobarPacComponent } from './components/aprobar-pac/aprobar-pac.component';
import { DatosAprobacionPacComponent } from './components/datos-aprobacion-pac/datos-aprobacion-pac.component';
import { FormAprobacionProyeccionComponent } from './components/form-aprobacion-proyeccion/form-aprobacion-proyeccion.component';
import { FormAprobacionFuentesComponent } from './components/form-aprobacion-fuentes/form-aprobacion-fuentes.component';
import { RubroAprobacionComponent } from './components/rubro-aprobacion/rubro-aprobacion.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatSelectModule } from '@angular/material';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    AprobarPacComponent,
    DatosAprobacionPacComponent,
    FormAprobacionProyeccionComponent,
    FormAprobacionFuentesComponent,
    RubroAprobacionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    CurrencyMaskModule,
    ScrollingModule,
    MatSelectModule,
    AprobacionRoutingModule
  ]
})
export class AprobacionModule { }
