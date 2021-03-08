import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GirosproveedoresRoutingModule } from './girosproveedores-routing.module';
import { LayoutGiroproveedoresComponent } from './components/layout-giroproveedores/layout-giroproveedores.component';
import { ListComponent } from './components/list/list.component';
import { CreateGiroComponent } from './components/create-giro/create-giro.component';
import { SetInformationComponent } from './components/set-information/set-information.component';
import { SetOrdenpagoComponent } from './components/set-ordenpago/set-ordenpago.component';
import { SetErogacionComponent } from './components/set-erogacion/set-erogacion.component';
import { SetResumenComponent } from './components/set-resumen/set-resumen.component';
import { SetContabilizacionComponent } from './components/set-contabilizacion/set-contabilizacion.component';
import { SetErogacioncontabilizacionComponent } from './components/set-erogacioncontabilizacion/set-erogacioncontabilizacion.component';
import { SetResumencontabilizacionComponent } from './components/set-resumencontabilizacion/set-resumencontabilizacion.component';


@NgModule({
  declarations: [LayoutGiroproveedoresComponent, ListComponent, CreateGiroComponent, SetInformationComponent, SetOrdenpagoComponent, SetErogacionComponent, SetResumenComponent, SetContabilizacionComponent, SetErogacioncontabilizacionComponent, SetResumencontabilizacionComponent],
  imports: [
    CommonModule,
    GirosproveedoresRoutingModule
  ]
})
export class GirosproveedoresModule { }
