import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GirosproveedoresRoutingModule } from './girosproveedores-routing.module';
import { LayoutGiroproveedoresComponent } from './components/layout-giroproveedores/layout-giroproveedores.component';
import { ListComponent } from './components/list/list.component';
import { CreateGiroComponent } from './components/create-giro/create-giro.component';
import { SetInformationComponent } from './components/set-information/set-information.component';
import { SetOrdenpagoComponent } from './components/set-ordenpago/set-ordenpago.component';
import { SetErogacionComponent } from './components/set-erogacion/set-erogacion.component';
import { SetResumenComponent } from './components/set-resumen/set-resumen.component';
import { SetContabilizacionComponent } from './components/set-contabilizacion/set-contabilizacion.component';
import { SetErogacioncontabilizacionComponent } from './components/set-erogacioncontabilizacion/set-erogacioncontabilizacion.component';
import { SetResumencontabilizacionComponent } from './components/set-resumencontabilizacion/set-resumencontabilizacion.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatStepperModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromGirosProveedores from './reducers/giros-proveedores.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GirosProveedoresEffects } from './effects/giros-proveedores.effects';
import { SetOrdenespagoComponent } from './components/set-ordenespago/set-ordenespago.component';
import { ContabilizacionComponent } from './components/contabilizacion/contabilizacion.component';

@NgModule({
  declarations: [LayoutGiroproveedoresComponent,
    ListComponent,
    CreateGiroComponent,
    SetInformationComponent,
    SetOrdenpagoComponent,
    SetErogacionComponent,
    SetResumenComponent,
    SetContabilizacionComponent,
    SetErogacioncontabilizacionComponent,
    SetResumencontabilizacionComponent,
    SetOrdenespagoComponent,
    ContabilizacionComponent,],
  imports: [
    SharedModule,
    CommonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    GirosproveedoresRoutingModule,
    StoreModule.forFeature(fromGirosProveedores.girosProveedoresFeatureKey, fromGirosProveedores.reducer),
    EffectsModule.forFeature([GirosProveedoresEffects])
  ]
})
export class GirosproveedoresModule { }
