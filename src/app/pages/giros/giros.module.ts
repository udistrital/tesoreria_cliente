import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GirosRoutingModule } from './giros-routing.module';
import { GirosComponent } from './giros.component';
import { LayoutReversarComponent } from './components/layout-reversar/layout-reversar.component';

@NgModule({
  declarations: [GirosComponent, LayoutReversarComponent],
  imports: [
    CommonModule,
    GirosRoutingModule
  ]
})
export class GirosModule { }
