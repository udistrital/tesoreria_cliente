import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguimientoRoutingModule } from './seguimiento-routing.module';
import { SeguimientoPacComponent } from './components/seguimiento-pac/seguimiento-pac.component';
import { DatosSeguimientoPacComponent } from './components/datos-seguimiento-pac/datos-seguimiento-pac.component';
import { FormSeguimientoProyeccionComponent } from './components/form-seguimiento-proyeccion/form-seguimiento-proyeccion.component';
import { RubroSeguimientoComponent } from './components/rubro-seguimiento/rubro-seguimiento.component';
import { FormSeguimientoFuentesComponent } from './components/form-seguimiento-fuentes/form-seguimiento-fuentes.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatSelectModule } from '@angular/material';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    SeguimientoPacComponent,
    DatosSeguimientoPacComponent,
    FormSeguimientoProyeccionComponent,
    RubroSeguimientoComponent,
    FormSeguimientoFuentesComponent
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
    SeguimientoRoutingModule
  ]
})
export class SeguimientoModule { }
