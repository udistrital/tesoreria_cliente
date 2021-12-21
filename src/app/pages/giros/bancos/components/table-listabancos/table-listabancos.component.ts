import { createInjectable } from '@angular/compiler/src/core';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { cargarBancosMid, obtenerBancos, obtenerBancosMid, cargarBancos } from '../../../../../shared/actions/shared.actions';
import { seleccionarBancos, seleccionarBancosMid } from '../../../../../shared/selectors/shared.selectors';
import { actualizarTercero } from '../../actions/bancos.actions';
import { DATOS_TABLABANCOS, CONFIGURACION_TABLABANCOS } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-table-listabancos',
  templateUrl: './table-listabancos.component.html',
  styleUrls: ['./table-listabancos.component.scss']
})
export class TableListabancosComponent implements OnInit, OnDestroy {
  @ViewChild('modalCambioEstado', {static: false}) modalCambioEstado: ElementRef;

  configBancos: any;
  datosBancos: any;
  displayedColumns = [];
  columnNames;
  dataSource;
  tabla;
  bancos: any;
  subBancos$: any;
  bancosTercero: any;
  subBancosTercero$: any;
  subBancosByMid$: any;

  constructor(private store: Store<any>,
              private router: Router,
              private modalService: NgbModal,
              private translate: TranslateService) {
    this.configBancos = CONFIGURACION_TABLABANCOS;
    for (let i = 0; i < this.configBancos.dataConfig.length; i++) {
      this.configBancos.dataConfig[i].title.name = this.translate.instant('BANCO.' + this.configBancos.dataConfig[i].title.name_i18n);
    }
    this.clearStore();
    this.store.dispatch(obtenerBancosMid({}));
    }

 ngOnDestroy(): void {
    this.subBancos$.unsubscribe();
    this.clearStore();
  }
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.displayedColumns = this.configBancos.dataConfig.map(x => x.key);
    this.columnNames = this.configBancos.dataConfig;
    this.subBancos$ = this.store.select(seleccionarBancosMid).subscribe((accion) => {
      if (accion && accion.BancosMid) {
        if (accion.BancosMid.length && accion.BancosMid[0].IdTercero) {
          this.bancos = accion.BancosMid;
          this.createTable();
        }
      }
    });
  }

  clearStore() {
    this.store.dispatch(cargarBancosMid(null));
    this.store.dispatch(cargarBancos(null));
  }

  createTable() {
    const tableArr: Element[] = [];
    for (let i = 0; i < this.bancos.length; i++) {
      let active;
      if (this.bancos[i].Activo === true) active = this.translate.instant('GLOBAL.activo');
      else active = this.translate.instant('GLOBAL.inactivo');
      const tabla: Element = {ID: i + 1, codigoSuper: this.bancos[i].CodigoSuper, codigoAch: this.bancos[i].CodigoAch, nitBanco: this.bancos[i].NIT,
        nombreBanco: this.bancos[i].NombreBanco, acciones: '', estado: active};
      tableArr.push(tabla);
    }
    this.dataSource = new MatTableDataSource(tableArr);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  modificarBanco(banco: any) {
    this.router.navigate(['pages/giros/bancos/editar/' + this.bancos[banco.ID - 1].IdTercero]);
    return;
  }

  cambiarEstado(Banco: any) {
    this.modalService.open(this.modalCambioEstado).result.then((result) => {
      if (`${result}`) {
        this.store.dispatch(obtenerBancos({query: {TerceroId__Id: this.bancos[Banco.ID - 1].IdTercero}}));
        this.store.select(seleccionarBancos).subscribe((accion) => {
          if (accion && accion.Bancos) {
            this.bancosTercero = accion.Bancos[0].TerceroId;
            this.bancosTercero.Activo = !this.bancosTercero.Activo;
            this.store.dispatch(actualizarTercero({id: this.bancosTercero.Id, element: this.bancosTercero}));
          }
          }
        );
      }
    }, () => { });
  }

}

export interface Element {
  ID: number;
  codigoSuper: number;
  codigoAch: number;
  nitBanco: string;
  nombreBanco: string;
  estado: boolean;
  acciones: string;
}
