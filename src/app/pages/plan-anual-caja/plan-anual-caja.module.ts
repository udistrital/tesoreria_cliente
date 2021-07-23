import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanAnualCajaRoutingModule } from './plan-anual-caja-routing.module';
import { PlanAnualCajaComponent } from './plan-anual-caja.component';


@NgModule({
  declarations: [
    PlanAnualCajaComponent,
  ],
  imports: [
    CommonModule,
    PlanAnualCajaRoutingModule,
  ]
})
export class PlanAnualCajaModule { }
