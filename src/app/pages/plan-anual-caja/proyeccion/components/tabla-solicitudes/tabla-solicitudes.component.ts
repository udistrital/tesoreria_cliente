import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
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
  ) {
    this.configuracion = CONFIGURACION_TABLA_SOLICITUDES_PAC;
    this.datos = DATOS_SOLICITUDES_PAC;
    this.title = 'PROYECCION PLAN ANUAL DE CAJA';
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

        }
        if (data.accion.title === 'Ver Tabla Proyeccion') {

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
