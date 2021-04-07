import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { DATOS_GIRO_ORDEN, CONF_ORDENPAGO, CONF_MINORDENPAGO, CONF_ADDORDENPAGO } from '../../interfaces/interfaces';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2';
import { SharedService } from '../../../../../shared/services/shared.service';
@Component({
  selector: 'ngx-set-ordenpago',
  templateUrl: './set-ordenpago.component.html',
  styleUrls: ['./set-ordenpago.component.scss']
})
export class SetOrdenpagoComponent implements OnInit, OnDestroy {

  @Output() validarOrden: EventEmitter<any>;
  @Output() statusOrden: EventEmitter<any>;

  configurationPlus: any;
  configurationMin: any;
  datosGiroOrdenPago: any;

  datoSeleccionado: any;
  subscriptionTabla$: any;
  mensaje: boolean;

  constructor(
    private store: Store<any>,
    private sharedService: SharedService
  ) {
    this.configurationPlus = CONF_ADDORDENPAGO;
    this.datosGiroOrdenPago = DATOS_GIRO_ORDEN;
    this.datoSeleccionado = [];
    this.configurationMin = CONF_MINORDENPAGO;
    this.validarOrden = new EventEmitter;
    this.statusOrden = new EventEmitter;
   }

  ngOnDestroy() {
    this.subscriptionTabla$.unsubscribe();
  }

  ngOnInit() {
    this.subscriptionTabla$ = this.store.select(getFilaSeleccionada).subscribe((action: any) => {
      if (this.sharedService.IfStore(action)) {
        if (action.accion.name === 'agregar') {
          if (this.datoSeleccionado.length === 0) {
            this.datoSeleccionado.push(action.fila);
            this.statusOrden.emit(true);
          } else {
            Swal.fire({
              type: 'error',
              title: '¡Error!',
              text: 'Sólo es posible elegir una orden de pago',
              confirmButtonText: 'Aceptar',
            });
          }
        }
        if (action.accion.name === 'eliminar') {
          this.datoSeleccionado.splice( this.datoSeleccionado.findIndex(
            (element: any) => {
              element.consecutivo ===  action.fila.consecutivo;
            }
          ), 1);
        }
        this.store.dispatch(LoadFilaSeleccionada(null));
      }
    });
  }

  guardar() {
    if (this.datoSeleccionado.length === 0) {
      this.statusOrden.emit(false);
      this.mensaje = true;
    } else {
      this.validarOrden.emit(this.datoSeleccionado);
      this.mensaje = false;
    }
  }
}
