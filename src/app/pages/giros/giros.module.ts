import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GirosRoutingModule } from './giros-routing.module';
import { GirosComponent } from './giros.component';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatRadioModule } from '@angular/material';
import { SucursalesEffects } from './sucursales/effects/sucursales.effects';
import { CuentaBancariaEffects } from './cuentas-bancarias/effects/cuentaBancaria.effects';
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
    MatSlideToggleModule,
    MatRadioModule,
    EffectsModule.forFeature([SucursalesEffects, CuentaBancariaEffects]),

  ]
})
export class GirosModule { }
