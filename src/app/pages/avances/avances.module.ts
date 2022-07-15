import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvancesRoutingModule } from './avances-routing.module';
import { AvancesComponent } from './avances.component';
import { TiposavancesModule } from './tiposavances/tiposavances.module';
import { SharedModule } from '../../shared/shared.module';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [AvancesComponent],
  imports: [
    CommonModule,
    AvancesRoutingModule,
    TiposavancesModule,
    SharedModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AvancesModule { }
