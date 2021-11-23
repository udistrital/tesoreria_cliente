import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableCuentabancariaComponent } from './components/table-cuentabancaria/table-cuentabancaria.component';
import { CreateCuentaComponent } from './components/create-cuenta/create-cuenta.component';
import { CuentasBancariasRoutingModule } from './cuentasbancarias-routing.module';
import { MatFormFieldModule, MatDividerModule, MatSelectModule, MatOptionModule, MatSlideToggleModule, MatIconModule, MatCheckboxModule, MatRadioModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SharedModule } from '../../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromCuentasBancarias from './reducers/cuentaBancaria.reducer';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [TableCuentabancariaComponent, CreateCuentaComponent],
  imports: [
    CommonModule,
    CuentasBancariasRoutingModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    SharedModule,
    MatCheckboxModule,
    MatRadioModule,
    StoreModule.forFeature(fromCuentasBancarias.cuentasBancariasFeatureKey, fromCuentasBancarias.reducer),
    EffectsModule
  ]
})
export class CuentasBancariasModule { }
