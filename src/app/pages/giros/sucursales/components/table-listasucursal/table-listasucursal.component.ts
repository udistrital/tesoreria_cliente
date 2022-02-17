import { Component, OnInit, OnDestroy, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { CONFIGURACION_TABLASUCURSAL } from '../../interfaces/interfaces';
import { getFilaSeleccionada, seleccionarSucursales } from '../../../../../shared/selectors/shared.selectors';
import { Store } from '@ngrx/store';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { cargarSucursales, LoadFilaSeleccionada, obtenerSucursales } from '../../../../../shared/actions/shared.actions';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { actualizarSucursal } from '../../actions/sucursales.actions';


@Component({
  selector: 'ngx-table-listasucursal',
  templateUrl: './table-listasucursal.component.html',
  styleUrls: ['./table-listasucursal.component.scss']
})
export class TableListasucursalComponent implements OnInit, OnDestroy {
  @ViewChild('borrarRegistroModal', { static: false }) borrarRegistroModal: ElementRef;

  configSucursal: any;
  datosSucursal: any;
  datosSucursales: any;
  subscription$: any;

  subSucursales$: any;

  closeResult = '';

  displayedColumns = [];
  columnNames;
  dataSource;


  @Output() selectedAction: EventEmitter<any>;
  stringBusqueda: string;

  constructor(
    private store: Store<any>,
    private modalService: NgbModal,
    private router: Router,
    ) {
    this.stringBusqueda = '';
    this.selectedAction = new EventEmitter<any>();
    this.configSucursal = CONFIGURACION_TABLASUCURSAL;
    this.datosSucursal = [];
    this.clearStore();
    this.store.dispatch(obtenerSucursales({}));
    }

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.displayedColumns = this.configSucursal.dataConfig.map(x => x.key);
    this.columnNames = this.configSucursal.dataConfig;
    this.subSucursales$ = this.store.select(seleccionarSucursales).subscribe((accion) => {
      if (accion && accion.Sucursales) {
        if (accion.Sucursales.length && accion.Sucursales[0].Id) {
          this.datosSucursales = accion.Sucursales;
          this.datosSucursales.forEach(element => {
            element.sucursal = JSON.parse(element.Dato).nombreSucursal;
          });
          this.createTable();
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subSucursales$.unsubscribe();
    this.clearStore();
  }

  clearStore() {
    this.store.dispatch(cargarSucursales(null));
  }

  modalEliminar(fila: any) {
    this.modalService.open(this.borrarRegistroModal).result.then((result) => {
      if (`${result}`) {

      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  createTable() {
    const tableArr: Element[] = [];
    for (let i = 0; i < this.datosSucursales.length; i++) {
      let active;
      if (this.datosSucursales[i].Activo === true) active = 'Activo';
      else active = 'Inactivo';
      const tabla: Element = {nombreSucursal: this.datosSucursales[i].sucursal, nombreBanco: this.datosSucursales[i].TerceroId.NombreCompleto, codigoID: i + 1,
        acciones: '', activo: active};
      tableArr.push(tabla);
    }
    this.dataSource = new MatTableDataSource(tableArr);
    this.dataSource.paginator = this.paginator;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  modificarSucursal(sucursal: any) {
    this.router.navigate(['pages/giros/sucursales/editar/' + this.datosSucursales[sucursal.codigoID - 1].Id]);
    return;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface Element {
  nombreSucursal: string;
  codigoID: number;
  nombreBanco: string;
  activo: string;
  acciones: string;
}
