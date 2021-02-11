import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjecucionavancesRoutingModule } from './ejecucionavances-routing.module';
import { ConsolidadoComponent } from './components/consolidado/consolidado.component';
import { EjecucionComponent } from './components/ejecucion/ejecucion.component';
import { InformeComponent } from './components/informe/informe.component';
import { LayoutEjecucionComponent } from './components/layout-ejecucion/layout-ejecucion.component';


@NgModule({
  declarations: [ConsolidadoComponent, EjecucionComponent, InformeComponent, LayoutEjecucionComponent],
  imports: [
    CommonModule,
    EjecucionavancesRoutingModule
  ]
})
export class EjecucionavancesModule { }
