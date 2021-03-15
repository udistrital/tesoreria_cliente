import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DATOS_GIRO_ORDEN, CONF_ORDENPAGO, CONF_MINORDENPAGO, CONF_ADDORDENPAGO } from '../../interfaces/interfaces';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2';
@Component({
  selector: 'ngx-set-ordenpago',
  templateUrl: './set-ordenpago.component.html',
  styleUrls: ['./set-ordenpago.component.scss']
})
export class SetOrdenpagoComponent implements OnInit {

  @Output() validarOrden: EventEmitter<any>;

  configurationPlus: any;
  configurationMin: any;
  datosGiroOrdenPago: any;

  datoSeleccionado: any;
  subscriptionTabla$: any;

  constructor(
    private store: Store<any>,
  ) {
    this.configurationPlus = CONF_ADDORDENPAGO;
    this.datosGiroOrdenPago = DATOS_GIRO_ORDEN;
    this.datoSeleccionado = [];
    this.configurationMin = CONF_MINORDENPAGO;
    this.validarOrden = new EventEmitter;
   }

  ngOnInit() {
    this.subscriptionTabla$ = this.store.select(getFilaSeleccionada).subscribe((action: any) => {
      if (action && action.accion && action.fila) {
        if (action.accion.name === 'agregar') {
          if (this.datoSeleccionado.length === 0) {
            this.datoSeleccionado.push(action.fila);
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
    this.validarOrden.emit(this.datoSeleccionado);
  }
}
