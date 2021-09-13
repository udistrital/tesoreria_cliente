
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { OPCIONES_AREA_FUNCIONAL } from '../../../../../shared/interfaces/interfaces';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { cargarSolicitudesAvance, obtenerSolicitudesAvance } from '../../actions/solicitudavances.actions';
import { CONFIGURACION_TABLASOLICITUD } from '../../interfaces/interfaces';
import { seleccionarSolicitudesAvance } from '../../selectors/solicitudavances.selectors';
import { AutenticationService } from '../../../../../@core/utils/authentication.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'ngx-table-solicitudavances',
  templateUrl: './table-solicitudavances.component.html',
  styleUrls: ['./table-solicitudavances.component.scss']
})


export class TableSolicitudavancesComponent implements OnInit, OnDestroy, AfterViewInit {

  configSolicitudes: any;
  datosSolicitudes: any;
  subSolicitudes$: any;
  areasFuncionales: any;
  tableSubscription$: any;
  documento: any;
  

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);  

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log("dataSource ", this.dataSource)
  }
  
  constructor(
    private store: Store<any>,
    private router: Router,
    private autenticationServie: AutenticationService,
  ) {

    this.datosSolicitudes = [];
    this.configSolicitudes = CONFIGURACION_TABLASOLICITUD;
    this.areasFuncionales = OPCIONES_AREA_FUNCIONAL;
    this.documento = '';
    this.clearStore();
    this.store.dispatch(obtenerSolicitudesAvance({}));
  }

  ngOnInit() {
    

    this.documento = this.autenticationServie.getPayload().documento;

    // console.log("Documento: ", this.documento);

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

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
