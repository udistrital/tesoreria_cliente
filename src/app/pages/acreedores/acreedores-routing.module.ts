import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'anulacion-cheque',
    loadChildren: () => import('./anulacion-cheque/anulacion-cheque.module')
      .then(m => m.AnulacionChequeModule),
  },
  {
    path: 'consulta-terceros',
    loadChildren: () => import('./consulta-terceros/consulta-terceros.module')
      .then(m => m.ConsultaTercerosModule),
  },
  {
    path: 'reactivacion-pagos',
    loadChildren: () => import('./reactivacion-pagos/reactivacion-pagos.module')
      .then(m => m.ReactivacionPagosModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcreedoresRoutingModule { }
