import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { DATOS_TABLATIPOS, CONFIGURACION_TABLATIPOS } from '../../interfaces/interfaces';
import { getFilaSeleccionada, getAccionTabla } from '../../../../../shared/selectors/shared.selectors';
import { loadTiposAvancesSeleccionado, loadTiposAvances } from '../../actions/tiposavances.actions';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { Router } from '@angular/router';

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

  // Modales
  closeResult = '';

  @Output() selectedAction: EventEmitter<any>;
  stringBusqueda: string;

  constructor (
    private store: Store<any>,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.datosTablaTipos = DATOS_TABLATIPOS;
    this.configuracionTipos = CONFIGURACION_TABLATIPOS;

    this.stringBusqueda = '';
    this.selectedAction = new EventEmitter<any>();
  }

  ngOnInit() {
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((accion) => {
      if (accion && accion.accion) {
        this.store.dispatch(loadTiposAvancesSeleccionado(accion.accion));
        if (accion.accion.name === 'modificarTipo') {
          this.router.navigate(['pages/avances/tiposavances/editar']);
        }
        if (accion.accion.name === 'verDetalle') {
          this.router.navigate(['pages/avances/tiposavances/detalle']);
        }
        if (accion.accion.name === 'asosiarRequisitos') {
          this.router.navigate(['pages/avances/tiposavances/asociar-requisito']);
        }
        // Eliminar datos que se encuentran en la tabla
        if (accion.accion.name === 'borrarTipo') {
          this.modalEliminar(accion.fila);
        }
      }
    });

  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
    this.store.dispatch(LoadFilaSeleccionada(null));
  }

  // Modal acciones sobre la tabla: eliminar registros
  modalEliminar(fila: any) {
    this.modalService.open(this.eliminarTipoModal).result.then((result) => {
      if (`${result}`) {
        this.datosTablaTipos.splice(this.datosTablaTipos.findIndex(
          (element: any) => element.codigoAbreviado === fila.codigoAbreviado
            && element.nombreTipo === fila.nombreTipo && element.descripcionTipo === fila.descripcionTipo
            && element.estadoTipo === fila.estadoTipo && element.fecha === fila.fecha
        ), 1);
        this.store.dispatch(loadTiposAvances({ datosTablaTipos: this.datosTablaTipos }));
      }
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
