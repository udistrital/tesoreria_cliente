import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReversarRoutingModule } from './reversar-routing.module';
import { LayoutReversarComponent } from './components/layout-reversar/layout-reversar.component';
import { ListaComponent } from './components/lista/lista.component';
import { CrearReversarComponent } from './components/crear-reversar/crear-reversar.component';
import { SetGirosComponent } from './components/set-giros/set-giros.component';
import { SetDetallesComponent } from './components/set-detalles/set-detalles.component';


@NgModule({
  declarations: [LayoutReversarComponent, ListaComponent, CrearReversarComponent, SetGirosComponent, SetDetallesComponent],
  imports: [
    CommonModule,
    ReversarRoutingModule
  ]
})
export class ReversarModule { }
