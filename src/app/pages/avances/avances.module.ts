import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvancesRoutingModule } from './avances-routing.module';
import { AvancesComponent } from './avances.component';
import { TiposavancesModule } from './tiposavances/tiposavances.module';


@NgModule({
  declarations: [AvancesComponent],
  imports: [
    CommonModule,
    AvancesRoutingModule,
    TiposavancesModule
  ]
})
export class AvancesModule { }
