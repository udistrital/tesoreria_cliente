import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcreedoresRoutingModule } from './acreedores-routing.module';
import { AcreedoresComponent } from './acreedores.component';


@NgModule({
  declarations: [
    AcreedoresComponent
  ],
  imports: [
    CommonModule,
    AcreedoresRoutingModule
  ]
})
export class AcreedoresModule { }
