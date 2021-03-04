import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { CONFIGURACION_TABLATIPOS } from '../../interfaces/interfaces';
import { getFilaSeleccionada, getAccionTabla } from '../../../../../shared/selectors/shared.selectors';
import { loadTiposAvancesSeleccionado, loadTiposAvances } from '../../actions/tiposavances.actions';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { Router } from '@angular/router';
import { cargarTiposAvances, eliminarTipoAvance, obtenerTiposAvances } from '../../../../../shared/actions/avances.actions';
import { seleccionarTiposAvances } from '../../../../../shared/selectors/avances.selectors';

@Component({
  selector: 'ngx-table-tiposavances',
  templateUrl: './table-tiposavances.component.html',
  styleUrls: ['./table-tiposavances.component.scss']
})
export class TableTiposavancesComponent implements OnInit, OnDestroy {
  @ViewChild('eliminarTipoModal', { static: false }) eliminarTipoModal: ElementRef;

  configuracionTipos: any;
  datosTablaTipos: any;
  subscription$: any;
  subTiposAvances$: any;

  // Modales
  closeResult = '';

  @Output() selectedAction: EventEmitter<any>;
  stringBusqueda: string;

  constructor(
    private store: Store<any>,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.datosTablaTipos = [];
    this.configuracionTipos = CONFIGURACION_TABLATIPOS;

    this.stringBusqueda = '';
    this.selectedAction = new EventEmitter<any>();
    this.clearStore();
    this.store.dispatch(obtenerTiposAvances({}));
  }

  ngOnInit() {
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((accion) => {
      if (accion && accion.accion && accion.fila) {
        if (accion.accion.name === 'modificarTipo') {
          this.router.navigate(['pages/avances/tiposavances/editar/' + accion.fila.Id]);
        }
        if (accion.accion.name === 'verDetalle') {
          this.router.navigate(['pages/avances/tiposavances/detalle/' + accion.fila.Id]);
        }
        if (accion.accion.name === 'asosiarRequisitos') {
          this.router.navigate(['pages/avances/tiposavances/asociar-requisito']);
        }
        // Eliminar datos que se encuentran en la tabla
        if (accion.accion.name === 'borrarTipo') {
          this.modalEliminar(accion.fila);
        }
        this.store.dispatch(loadTiposAvancesSeleccionado(accion.accion));
      }
    });

    this.subTiposAvances$ = this.store.select(seleccionarTiposAvances).subscribe((accion) => {
      if (accion && accion.tiposAvances) {
        if (accion.tiposAvances.length && accion.tiposAvances[0].Id) {
          this.datosTablaTipos = accion.tiposAvances;
          this.datosTablaTipos.forEach(element => {
            element.estadoTipo = element.Activo ? 'Activo' : 'Inactivo';
          });
        } else if (accion.tiposAvances.idEliminado)
          this.datosTablaTipos.splice(this.datosTablaTipos.findIndex(
            (element: any) => element.Id === accion.tiposAvances.idEliminado), 1);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
    this.subTiposAvances$.unsubscribe();
    this.clearStore();
  }

  clearStore() {
    this.store.dispatch(LoadFilaSeleccionada(null));
    this.store.dispatch(cargarTiposAvances(null));
  }

  // Modal acciones sobre la tabla: eliminar registros
  modalEliminar(fila: any) {
    this.modalService.open(this.eliminarTipoModal).result.then((result) => {
      if (`${result}`)
        this.store.dispatch(eliminarTipoAvance({ id: fila.Id }));
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

}
