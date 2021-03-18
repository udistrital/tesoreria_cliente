import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucursalesRoutingModule } from './sucursales-routing.module';
import { CreateSucursalComponent } from './components/create-sucursal/create-sucursal.component';
import { TableListasucursalComponent } from './components/table-listasucursal/table-listasucursal.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatDividerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [CreateSucursalComponent, TableListasucursalComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    SucursalesRoutingModule
  ]
})
export class SucursalesModule { }
