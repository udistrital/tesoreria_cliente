import { Component, OnInit } from '@angular/core';
import {DATOS_GIRO_ORDEN, CONF_ORDENPAGO} from '../../interfaces/interfaces';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ngx-set-ordenpago',
  templateUrl: './set-ordenpago.component.html',
  styleUrls: ['./set-ordenpago.component.scss']
})
export class SetOrdenpagoComponent implements OnInit {

  configuration: any;
  datosGiroOrdenPago: any;

  datoSeleccionado: any;
  subscriptionTabla$: any;

  constructor(
    private store: Store<any>,
  ) {
    this.configuration = CONF_ORDENPAGO;
    this.datosGiroOrdenPago = DATOS_GIRO_ORDEN;
    this.datoSeleccionado = [];
   }

  ngOnInit() {
    this.subscriptionTabla$ = this.store.select(getFilaSeleccionada).subscribe((accion: any) => {
      if (accion) {
        if (Object.keys(accion)[0] !== 'type') {
          this.datoSeleccionado.push('a');          
          console.log(this.datoSeleccionado);
          this.store.dispatch(LoadFilaSeleccionada(null));
        }
      }
    });
  }

}
