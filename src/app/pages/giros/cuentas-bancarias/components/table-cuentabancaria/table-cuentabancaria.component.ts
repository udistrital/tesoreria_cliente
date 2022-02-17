import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { cargarCuentasBancarias, cargarSucursales, obtenerCuentasBancarias, obtenerSucursales, obtenerTipoCuenta } from '../../../../../shared/actions/shared.actions';
import { seleccionarCuentasBancarias, seleccionarSucursales, seleccionarTipoCuentas } from '../../../../../shared/selectors/shared.selectors';
import { actualizarCuentaBancaria } from '../../actions/cuentaBancaria.action';
import { CONFIGURACION_TABLACUENTA } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-table-cuentabancaria',
  templateUrl: './table-cuentabancaria.component.html',
  styleUrls: ['./table-cuentabancaria.component.scss']
})
export class TableCuentabancariaComponent implements OnInit, OnDestroy {
  @ViewChild('modalCambioEstado', {static: false}) modalCambioEstado: ElementRef;

  configCuentaBancaria: any;
  datosCuentaBancaria: any;
  datosCuentasBancarias: any;
  tipoCuentas: any;
  sucursales: any;
  subscription$: any;

  subCuentaBancaria$: any;
  subTipoCuenta$: any;
  subSucursal$: any;

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
    private translate: TranslateService ) {
      this.stringBusqueda = '';
      this.selectedAction = new EventEmitter<any>();
      this.configCuentaBancaria = CONFIGURACION_TABLACUENTA;
      for (let i = 0; i < this.configCuentaBancaria.dataConfig.length; i++) {
        this.configCuentaBancaria.dataConfig[i].title.name = this.translate.instant('CUENTA_BANCARIA.' + this.configCuentaBancaria.dataConfig[i].title.name_i18n);
      }
      this.datosCuentaBancaria = [];
      this.store.dispatch(obtenerSucursales({}));
      this.store.dispatch(obtenerTipoCuenta({}));
      this.store.dispatch(obtenerCuentasBancarias({}));
    }

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnDestroy(): void {
    this.clearStore();
    this.subCuentaBancaria$.unsubscribe();
    this.subSucursal$.unsubscribe();
    this.subTipoCuenta$.unsubscribe();
  }

  clearStore() {
    this.store.dispatch(cargarCuentasBancarias(null));
    this.store.dispatch(cargarSucursales(null));
  }

  ngOnInit() {
    this.displayedColumns = this.configCuentaBancaria.dataConfig.map(x => x.key);
    this.columnNames = this.configCuentaBancaria.dataConfig;
    this.subSucursal$ = this.store.select(seleccionarSucursales).subscribe((action) => {
      if (action && action.Sucursales) {
        this.sucursales = action.Sucursales;
        this.subTipoCuenta$ = this.store.select(seleccionarTipoCuentas).subscribe((action1) => {
        if (action1 && action1.TipoCuentas) {
          this.tipoCuentas = action1.TipoCuentas;
          this.subCuentaBancaria$ = this.store.select(seleccionarCuentasBancarias).subscribe((accion) => {
          if (accion && accion.CuentasBancarias) {
            if (accion.CuentasBancarias.length && accion.CuentasBancarias[0].Id) {
              this.datosCuentaBancaria = accion.CuentasBancarias;
              this.datosCuentaBancaria.forEach(element => {
                element.tipoCuenta = this.tipoCuentas.find(e => e.Id === element.TipoCuentaId).Nombre;
                element.sucursal = JSON.parse(this.sucursales.find(e => e.Id === element.SucursalId).Dato).nombreSucursal;
              });
              this.createTable();
            }
          }
          });
        }
        });
      }
    });
  }

  createTable() {
    const tableArr: Element[] = [];
    for (let i = 0; i < this.datosCuentaBancaria.length; i++) {
      let active;
      if (this.datosCuentaBancaria[i].Activo === true) active = this.translate.instant('GLOBAL.activo');
      else active = this.translate.instant('GLOBAL.inactivo');
      const tabla: Element = {ID: i + 1, nombreCuenta: this.datosCuentaBancaria[i].NombreCuenta, tipoCuenta: this.datosCuentaBancaria[i].tipoCuenta,
        numeroCuenta: this.datosCuentaBancaria[i].NumeroCuenta, sucursal: this.datosCuentaBancaria[i].sucursal, estado: active, acciones: ''};
        tableArr.push(tabla);
      }
      this.dataSource = new MatTableDataSource(tableArr);
      this.dataSource.paginator = this.paginator;
  }

  modificarCuentaBancaria(cuentaBancaria: any) {
    this.router.navigate(['pages/giros/cuentas/editar/' + this.datosCuentaBancaria[cuentaBancaria.ID - 1].Id]);
    return;
  }

  verCuentaBancaria(cuentaBancaria: any) {
    this.router.navigate(['pages/giros/cuentas/ver/' + this.datosCuentaBancaria[cuentaBancaria.ID - 1].Id]);
    return;
  }

  cambiarEstado(cuentaBancaria: any) {
    this.modalService.open(this.modalCambioEstado).result.then((result) => {
      const cuenta = this.datosCuentaBancaria[cuentaBancaria.ID - 1];
      const id = cuenta.Id;
      if (`${result}`) {
        cuenta.Activo = !cuenta.Activo; delete cuentaBancaria.estado;
        this.store.dispatch(actualizarCuentaBancaria({ id: id, element: cuenta }));
        if (cuenta.Activo === true) cuentaBancaria.estado = this.translate.instant('GLOBAL.activo');
      else cuentaBancaria.estado = this.translate.instant('GLOBAL.inactivo');
      }
    }, () => { });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

export interface Element {
  ID: number;
  nombreCuenta: string;
  tipoCuenta: string;
  numeroCuenta: number;
  sucursal: string;
  estado: string;
  acciones: string;
}
