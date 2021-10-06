
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DatePipe } from '@angular/common'
import { OPCIONES_AREA_FUNCIONAL } from '../../../../../shared/interfaces/interfaces';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { cargarSolicitudesAvance, obtenerSolicitudesAvance } from '../../actions/solicitudavances.actions';
import { CONFIGURACION_TABLASOLICITUD } from '../../interfaces/interfaces';
import { seleccionarSolicitudesAvance } from '../../selectors/solicitudavances.selectors';
import { AutenticationService } from '../../../../../@core/utils/authentication.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';

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
  documento: any;

  displayedColumns = [];
  dataSource;
  columnNames;

  constructor(
    private store: Store<any>,
    private router: Router,
    private autenticationServie: AutenticationService,
    private datePipe: DatePipe,
  ) {

    this.datosSolicitudes = [];
    this.configSolicitudes = CONFIGURACION_TABLASOLICITUD;
    this.areasFuncionales = OPCIONES_AREA_FUNCIONAL;
    this.documento = '';
    this.clearStore();
    this.store.dispatch(obtenerSolicitudesAvance({}));
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  ngOnInit() {
    this.displayedColumns = this.configSolicitudes.dataConfig.map(x => x.key);
    this.columnNames = this.configSolicitudes.dataConfig;    
    this.documento = this.autenticationServie.getPayload().documento;

    // console.log("Documento: ", this.documento);

    // this.tableSubscription$ = this.store.select(getFilaSeleccionada).subscribe((accion) => {
    //   if (accion && accion.accion && accion.fila) {
    //     if (accion.accion.name === 'modificarSolicitud') {
    //       this.router.navigate(['pages/avances/solicitudavances/crear/' + accion.fila.Id]);
    //     }
    //   }
    // });

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
      this.createTable();
    });
  }

  ngOnDestroy(): void {
    this.subSolicitudes$.unsubscribe();
    //this.tableSubscription$.unsubscribe();
    this.clearStore();
  }

  clearStore() {
    this.store.dispatch(cargarSolicitudesAvance(null));
  }

  createTable() {
    let tableArr: Element[] = [];
    for (let i = 0; i < this.datosSolicitudes.length; i++) {
      let tabla: Element = {areaFuncional: this.datosSolicitudes[i].areaFuncional, Id: this.datosSolicitudes[i].Id, estadoSolicitud: this.datosSolicitudes[i].estadoSolicitud, fechaRadicacion: this.datePipe.transform(this.datosSolicitudes[i].FechaRadicacion, 'dd/MM/yyyy'), acciones: ''}
      tableArr.push(tabla)
    }
    this.dataSource = new MatTableDataSource(tableArr);
    this.dataSource.paginator = this.paginator;
  }
  modificarSolicitud(prueba: any) {
    console.log("entró ", prueba)
    this.router.navigate(['pages/avances/solicitudavances/crear/' + prueba.Id])
    return
    this.tableSubscription$ = this.store.select(getFilaSeleccionada).subscribe((accion) => {
      console.log("ASD ", accion)
      if (accion && accion.accion && accion.fila) {
        if (accion.accion.name === 'modificarSolicitud') {
          return this.router.navigate(['pages/avances/solicitudavances/crear/' + accion.fila.Id]);
        }
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


export interface Element {
  areaFuncional: string,
  Id: number,
  estadoSolicitud: string,
  fechaRadicacion: string,
  acciones: string,
}