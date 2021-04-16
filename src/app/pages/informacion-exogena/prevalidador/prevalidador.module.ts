import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrevalidadorRoutingModule } from './prevalidador-routing.module';
import { FormatoprevalidadorComponent } from './components/formatoprevalidador/formatoprevalidador.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatDividerModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';



@NgModule({
  declarations: [
    FormatoprevalidadorComponent
  ],
  imports: [
    CommonModule,
    PrevalidadorRoutingModule,
    SharedModule,
    MatDividerModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    RxReactiveFormsModule
  ]
})
export class PrevalidadorModule { }
