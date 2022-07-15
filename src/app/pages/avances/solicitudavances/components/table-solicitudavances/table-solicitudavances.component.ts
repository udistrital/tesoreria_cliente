
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DatePipe } from '@angular/common';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { cargarSolicitudesAvance, obtenerSolicitudesAvance } from '../../actions/solicitudavances.actions';
import { CONFIGURACION_TABLASOLICITUD } from '../../interfaces/interfaces';
import { seleccionarSolicitudesAvance } from '../../selectors/solicitudavances.selectors';
import { AutenticationService } from '../../../../../@core/utils/authentication.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MockService } from '../../../../../shared/services/mock.service';

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
    private mockService: MockService
  ) {

    this.datosSolicitudes = [];
    this.configSolicitudes = CONFIGURACION_TABLASOLICITUD;
    this.documento = '';
    this.clearStore();
    this.store.dispatch(obtenerSolicitudesAvance({}));
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.displayedColumns = this.configSolicitudes.dataConfig.map(x => x.key);
    this.columnNames = this.configSolicitudes.dataConfig;
    this.documento = this.autenticationServie.getPayload().documento;

    this.mockService.getAreasFuncionales().subscribe((res) => {
      this.areasFuncionales = res;
    });

    this.subSolicitudes$ = this.store.select(seleccionarSolicitudesAvance).subscribe((accion) => {
      if (accion && accion.solicitudesAvance) {
        if (accion.solicitudesAvance.length && accion.solicitudesAvance[0].Id) {
          this.datosSolicitudes = accion.solicitudesAvance;
          this.datosSolicitudes.forEach(element => {
            element.estadoSolicitud = element.EstadoTipoSolicitud.EstadoId.Nombre;

            const areaRes = this.areasFuncionales.find(area =>
              area.Id === element.AreaFuncionalId);

            element.areaFuncional = areaRes.Id + ' - ' + areaRes.Nombre;
          });
        }
      }
      this.createTable();
    });
  }

  ngOnDestroy(): void {
    this.subSolicitudes$.unsubscribe();
    this.clearStore();
  }

  clearStore() {
    this.store.dispatch(cargarSolicitudesAvance(null));
  }

  createTable() {
    const tableArr: Element[] = [];
    for (let i = 0; i < this.datosSolicitudes.length; i++) {
      const tabla: Element = {areaFuncional: this.datosSolicitudes[i].areaFuncional, Id: this.datosSolicitudes[i].Id, estadoSolicitud: this.datosSolicitudes[i].estadoSolicitud,
        fechaRadicacion: this.datePipe.transform(this.datosSolicitudes[i].FechaRadicacion, 'dd/MM/yyyy'), acciones: ''};
      tableArr.push(tabla);
    }
    this.dataSource = new MatTableDataSource(tableArr);
    this.dataSource.paginator = this.paginator;
  }
  modificarSolicitud(prueba: any) {
    this.router.navigate(['pages/avances/solicitudavances/crear/' + prueba.Id]);
    return;
    this.tableSubscription$ = this.store.select(getFilaSeleccionada).subscribe((accion) => {
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
  areaFuncional: string;
  Id: number;
  estadoSolicitud: string;
  fechaRadicacion: string;
  acciones: string;
}
