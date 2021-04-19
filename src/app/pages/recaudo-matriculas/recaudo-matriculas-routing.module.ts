import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecaudoMatriculasComponent } from './recaudo-matriculas.component';


const routes: Routes = [
  {
    path: '',
    component: RecaudoMatriculasComponent,
    children: [
      {
        path: 'reporte-matriculas',
        loadChildren: () => import('./reporte-matriculas/reporte-matriculas.module')
        .then(m => m.ReporteMatriculasModule),
      },
      {
        path: 'consulta-matriculas',
        loadChildren: () => import('./consulta-matriculas/consulta-matriculas.module')
        .then(m => m.ConsultaMatriculasModule),
      },
      {
        path: 'reporte-mora',
        loadChildren: () => import('./reporte-mora/reporte-mora.module')
        .then(m => m.ReporteMoraModule),
      },
      {
        path: 'control-mora',
        loadChildren: () => import('./control-mora/control-mora.module')
        .then(m => m.ControlMoraModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecaudoMatriculasRoutingModule { }
