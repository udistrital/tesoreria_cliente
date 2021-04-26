import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormRubroPacComponent } from './components/form-rubro-pac/form-rubro-pac.component';
import { TablaProyeccionComponent } from './components/tabla-proyeccion/tabla-proyeccion.component';
import { TablaSolicitudesComponent } from './components/tabla-solicitudes/tabla-solicitudes.component';



const routes: Routes = [
  {
    path: 'tabla-solicitudes',
    component: TablaSolicitudesComponent
  },
  {
    path: 'tabla-proyeccion',
    component: TablaProyeccionComponent
  },
  {
    path: 'form-rubro-pac',
    component: FormRubroPacComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyeccionRoutingModule { }
