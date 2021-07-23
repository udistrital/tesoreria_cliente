
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { OPCIONES_AREA_FUNCIONAL } from '../../../../../shared/interfaces/interfaces';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { cargarSolicitudesAvance, obtenerSolicitudesAvance } from '../../actions/solicitudavances.actions';
import { CONFIGURACION_TABLASOLICITUD } from '../../interfaces/interfaces';
import { seleccionarSolicitudesAvance } from '../../selectors/solicitudavances.selectors';

@Component({
  selector: 'ngx-table-solicitudavances',
  templateUrl: './table-solicitudavances.component.html',
  styleUrls: ['./table-solicitudavances.component.scss']
})
export class TableSolicitudavancesComponent implements OnInit, OnDestroy {

  configSolicitudes: any;
  datosSolicitudes: any;
  subSolicitudes$: any;
  areasFuncionales: any;
  tableSubscription$: any;

  constructor(
    private store: Store<any>,
    private router: Router,
  ) {

    this.datosSolicitudes = [];
    this.configSolicitudes = CONFIGURACION_TABLASOLICITUD;
    this.areasFuncionales = OPCIONES_AREA_FUNCIONAL;
    this.clearStore();
    this.store.dispatch(obtenerSolicitudesAvance({}));
  }

  ngOnInit() {
    this.tableSubscription$ = this.store.select(getFilaSeleccionada).subscribe((accion) => {
      if (accion && accion.accion && accion.fila) {
        if (accion.accion.name === 'modificarSolicitud') {
          this.router.navigate(['pages/avances/solicitudavances/crear/' + accion.fila.Id]);
        }
      }
    });

    this.subSolicitudes$ = this.store.select(seleccionarSolicitudesAvance).subscribe((accion) => {
      if (accion && accion.solicitudesAvance) {
        if (accion.solicitudesAvance.length && accion.solicitudesAvance[0].Id) {
          this.datosSolicitudes = accion.solicitudesAvance;
          this.datosSolicitudes.forEach(element => {
            element.estadoSolicitud = element.EstadoTipoSolicitud.EstadoId.Nombre;

            const areaRes = this.areasFuncionales.find(area =>
              area.Id === element.AreaFuncionalId);

            // const area = this.areasFuncionales.find((ar: any) =>
              // ar.Id === element.AreaFuncionalId);

            element.areaFuncional = areaRes.Id + ' - ' + areaRes.Nombre;
          });
        } /*else if (accion.tiposAvances.idActualizado) {
          const tipoAvance = this.datosTablaTipos.find((element: any) =>
            element.Id === accion.tiposAvances.idActualizado);
          if (tipoAvance) {
            tipoAvance.estadoTipo = 'Inactivo';
            this.popupManager.showSuccessAlert('Tipo de avance desactivado');
          }
        }*/
      }
    });


  }

  ngOnDestroy(): void {
    this.subSolicitudes$.unsubscribe();
    this.tableSubscription$.unsubscribe();
    this.clearStore();
  }

  clearStore() {
    this.store.dispatch(cargarSolicitudesAvance(null));
  }

}
