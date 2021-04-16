import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnularChequeComponent } from './components/anular-cheque/anular-cheque.component';
import { ContabilizacionComponent } from './components/contabilizacion/contabilizacion.component';
import { DetalleGiroComponent } from './components/detalle-giro/detalle-giro.component';
import { SubirArchivoComponent } from './components/subir-archivo/subir-archivo.component';
import { TablaAnulacionComponent } from './components/tabla-anulacion/tabla-anulacion.component';


const routes: Routes = [
  {
    path: 'subir-archivo',
    component: SubirArchivoComponent,
  },
  {
    path: 'tabla-anulacion',
    component: TablaAnulacionComponent,
  },
  {
    path: 'detalle-giro',
    component: DetalleGiroComponent,
  },
  {
    path: 'anular-cheque',
    component: AnularChequeComponent
  },
  {
    path: 'anular-cheque',
    component: AnularChequeComponent,
  },
  {
    path: 'contabilizacion',
    component: ContabilizacionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnulacionChequeRoutingModule { }
