import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalizacionavanceRoutingModule } from './legalizacionavance-routing.module';
import { ListaLegalizacionesComponent } from './components/lista-legalizaciones/lista-legalizaciones.component';
import { SetLegalizacionComponent } from './components/set-legalizacion/set-legalizacion.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [ListaLegalizacionesComponent, SetLegalizacionComponent],
  imports: [
    CommonModule,
    LegalizacionavanceRoutingModule,
    SharedModule
  ]
})
export class LegalizacionavanceModule { }
