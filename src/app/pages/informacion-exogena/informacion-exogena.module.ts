import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionExogenaRoutingModule } from './informacion-exogena-routing.module';
import { InformacionExogenaComponent } from './informacion-exogena.component';


@NgModule({
  declarations: [
    InformacionExogenaComponent
  ],
  imports: [
    CommonModule,
    InformacionExogenaRoutingModule
  ]
})
export class InformacionExogenaModule { }
