import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BancosRoutingModule } from './bancos-routing.module';
import { CreateBancoComponent } from './components/create-banco/create-banco.component';
import { TableListabancosComponent } from './components/table-listabancos/table-listabancos.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatDividerModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [CreateBancoComponent, TableListabancosComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    BancosRoutingModule
  ]
})
export class BancosModule { }
