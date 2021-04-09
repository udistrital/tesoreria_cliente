import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CierreRoutingModule } from './cierre-routing.module';
import { CierrePacComponent } from './components/cierre-pac/cierre-pac.component';
import { TablaCierrePacComponent } from './components/tabla-cierre-pac/tabla-cierre-pac.component';


@NgModule({
  declarations: [CierrePacComponent, TablaCierrePacComponent],
  imports: [
    CommonModule,
    CierreRoutingModule
  ]
})
export class CierreModule { }
