import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucursalesRoutingModule } from './sucursales-routing.module';
import { CreateSucursalComponent } from './components/create-sucursal/create-sucursal.component';
import { TableListasucursalComponent } from './components/table-listasucursal/table-listasucursal.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatDividerModule, MatSelectModule, MatOptionModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromSucursales from './reducers/sucursales.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ScrollingModule } from '@angular/cdk/scrolling';




@NgModule({
  declarations: [CreateSucursalComponent, TableListasucursalComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    SucursalesRoutingModule,
    MatSelectModule,
    StoreModule.forFeature(fromSucursales.sucursalesFeatureKey, fromSucursales.reducer),
    ScrollingModule,
    EffectsModule,
    MatOptionModule,
  ]
})
export class SucursalesModule { }
