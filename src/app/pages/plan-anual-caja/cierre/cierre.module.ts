import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CierreRoutingModule } from './cierre-routing.module';
import { CierrePacComponent } from './components/cierre-pac/cierre-pac.component';
import { TablaCierrePacComponent } from './components/tabla-cierre-pac/tabla-cierre-pac.component';
import { SharedModule } from '../../../shared/shared.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatSelectModule } from '@angular/material';
import { NbDatepickerModule } from '@nebular/theme';
import { CurrencyMaskModule } from 'ng2-currency-mask';


@NgModule({
  declarations: [
    CierrePacComponent,
    TablaCierrePacComponent
  ],
  imports: [
    CommonModule,
    CierreRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    CurrencyMaskModule,
    ScrollingModule,
    MatSelectModule,
    NbDatepickerModule,
  ]
})
export class CierreModule { }
