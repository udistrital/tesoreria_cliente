import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GirochequesRoutingModule } from './girocheques-routing.module';
import { LayoutGirochequeComponent } from './components/layout-girocheque/layout-girocheque.component';
import { ListComponent } from './components/list/list.component';
import { CreateGiroComponent } from './components/create-giro/create-giro.component';


@NgModule({
  declarations: [LayoutGirochequeComponent, ListComponent, CreateGiroComponent],
  imports: [
    CommonModule,
    GirochequesRoutingModule
  ]
})
export class GirochequesModule { }
