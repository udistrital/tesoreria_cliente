import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GirosRoutingModule } from './giros-routing.module';
import { GirosComponent } from './giros.component';

@NgModule({
  declarations: [GirosComponent
  ],
  imports: [
    CommonModule,
    GirosRoutingModule
  ]
})
export class GirosModule { }
