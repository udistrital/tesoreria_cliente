import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecaudoMatriculasRoutingModule } from './recaudo-matriculas-routing.module';
import { RecaudoMatriculasComponent } from './recaudo-matriculas.component';


@NgModule({
  declarations: [
    RecaudoMatriculasComponent
  ],
  imports: [
    CommonModule,
    RecaudoMatriculasRoutingModule
  ]
})
export class RecaudoMatriculasModule { }
