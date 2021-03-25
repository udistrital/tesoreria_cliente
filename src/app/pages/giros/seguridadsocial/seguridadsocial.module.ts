import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadsocialRoutingModule } from './seguridadsocial-routing.module';
import { ContabilizacionComponent } from './components/contabilizacion/contabilizacion.component';
import { CrearGiroComponent } from './components/crear-giro/crear-giro.component';
import { LayoutSeguridadsocialComponent } from './components/layout-seguridadsocial/layout-seguridadsocial.component';
import { SetInformacionComponent } from './components/set-informacion/set-informacion.component';
import { SetRelacionesComponent } from './components/set-relaciones/set-relaciones.component';
import { SetRubrosComponent } from './components/set-rubros/set-rubros.component';
import { SetErogacionComponent } from './components/set-erogacion/set-erogacion.component';
import { ListaSeguridadComponent } from './components/lista-seguridad/lista-seguridad.component';


@NgModule({
  declarations: [ContabilizacionComponent,
    CrearGiroComponent,
    LayoutSeguridadsocialComponent,
    SetInformacionComponent,
    SetRelacionesComponent,
    SetRubrosComponent,
    SetErogacionComponent,
    ListaSeguridadComponent ],
  imports: [
    CommonModule,
    SeguridadsocialRoutingModule
  ]
})
export class SeguridadsocialModule { }
