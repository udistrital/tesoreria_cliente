import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleReporteMatriculasComponent } from './components/detalle-reporte-matriculas/detalle-reporte-matriculas.component';
import { TablaReporteMatriculasComponent } from './components/tabla-reporte-matriculas/tabla-reporte-matriculas.component';


const routes: Routes = [
  {
    path: 'tabla-general',
    component: TablaReporteMatriculasComponent,
  },
  {
    path: 'detalle-reporte',
    component: DetalleReporteMatriculasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteMatriculasRoutingModule { }
