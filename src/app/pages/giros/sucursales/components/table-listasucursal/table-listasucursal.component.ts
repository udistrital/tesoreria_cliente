import { Component, OnInit, OnDestroy, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { DATOS_TABLASUCURSAL, CONFIGURACION_TABLASUCURSAL } from '../../interfaces/interfaces';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { Store } from '@ngrx/store';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';


@Component({
  selector: 'ngx-table-listasucursal',
  templateUrl: './table-listasucursal.component.html',
  styleUrls: ['./table-listasucursal.component.scss']
})
export class TableListasucursalComponent implements OnInit, OnDestroy {
  @ViewChild('borrarRegistroModal', { static: false }) borrarRegistroModal: ElementRef;

  configSucursal: any;
  datosSucursal: any;
  subscription$: any;

  closeResult = '';


  @Output() selectedAction: EventEmitter<any>;
  stringBusqueda: string;

  constructor(
    private store: Store<any>,
    private modalService: NgbModal
    ) {
    this.stringBusqueda = '';
    this.selectedAction = new EventEmitter<any>();
    this.datosSucursal = DATOS_TABLASUCURSAL;
    this.configSucursal = CONFIGURACION_TABLASUCURSAL;

    }

  ngOnInit() {
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((accion) => {
      if (accion && accion.accion && accion.fila) {
        // Eliminar datos que se encuentran en la tabla
        if (accion.accion.name === 'borraSucursal') {
          this.modalEliminar(accion.fila);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
    this.store.dispatch(LoadFilaSeleccionada(null));
  }

  modalEliminar(fila: any) {
    this.modalService.open(this.borrarRegistroModal).result.then((result) => {
      if (`${result}`) {

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
