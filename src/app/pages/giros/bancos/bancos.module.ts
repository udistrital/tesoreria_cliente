import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BancosRoutingModule } from './bancos-routing.module';
import { CreateBancoComponent } from './components/create-banco/create-banco.component';
import { TableListabancosComponent } from './components/table-listabancos/table-listabancos.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatDividerModule, MatOptionModule, MatSelectModule, MatSlideToggleModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromBancos from './reducers/bancos.reducer';




@NgModule({
  declarations: [CreateBancoComponent, TableListabancosComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatSelectModule,
    MatOptionModule,
    BancosRoutingModule,
    MatSlideToggleModule,
    StoreModule.forFeature(fromBancos.bancosFeatureKey, fromBancos.reducer),
  ]
})
export class BancosModule { }
