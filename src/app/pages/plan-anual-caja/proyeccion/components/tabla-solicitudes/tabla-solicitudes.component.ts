import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadAreaFuncional, LoadCentroGestor, LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { SharedService } from '../../../../../shared/services/shared.service';
import { CONFIGURACION_TABLA_SOLICITUDES_PAC, DATOS_SOLICITUDES_PAC } from '../../interfaces/interfaces';
import { FormRubroPacComponent } from '../form-rubro-pac/form-rubro-pac.component';
import { FormSolicitudPacComponent } from '../form-solicitud-pac/form-solicitud-pac.component';

@Component({
  selector: 'ngx-tabla-solicitudes',
  templateUrl: './tabla-solicitudes.component.html',
  styleUrls: ['./tabla-solicitudes.component.scss']
})
export class TablaSolicitudesComponent implements OnInit {

  configuracion: any;
  datos: any[];
  title: any;
  subscription$: any;

  constructor(
    private store: Store<any>,
    private matDialog: MatDialog,
    private sharedService: SharedService,
    private route: Router,
  ) {
    this.configuracion = CONFIGURACION_TABLA_SOLICITUDES_PAC;
    this.datos = DATOS_SOLICITUDES_PAC;
    this.title = 'PROYECCION PLAN ANUAL DE CAJA';
    this.store.dispatch(LoadCentroGestor({
      CentroGestor: 230,
    }));
    this.store.dispatch(LoadAreaFuncional({
      Id: 1,
      Nombre: 'Rector',
      label: '01 - Rector',
    }));
  }

  ngOnInit() {
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((data: any) => {
      if (this.sharedService.IfStore(data)) {
        if (data.accion.title === 'Editar') {
          this.matDialog.open(FormSolicitudPacComponent, {
            data: data.fila,
          });
        }
        if (data.accion.title === 'Ver Proyeccion') {
          this.route.navigate(['pages/plan-anual-caja/proyeccion/form-rubro-pac']);
          this.store.dispatch(LoadFilaSeleccionada(null));
        }
        if (data.accion.title === 'Ver Tabla Proyeccion') {
          this.route.navigate(['pages/plan-anual-caja/proyeccion/tabla-proyeccion']);
          this.store.dispatch(LoadFilaSeleccionada(null));
        }
      }
    });
  }

  OnCreate() {
    this.matDialog.open(FormSolicitudPacComponent, {
      data: null,
    });
  }
}
