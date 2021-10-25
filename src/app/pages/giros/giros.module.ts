import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GirosRoutingModule } from './giros-routing.module';
import { GirosComponent } from './giros.component';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { SucursalesEffects } from './sucursales/effects/sucursales.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [GirosComponent
  ],
  imports: [
    CommonModule,
    GirosRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    EffectsModule.forFeature([SucursalesEffects]),

  ]
})
export class GirosModule { }
