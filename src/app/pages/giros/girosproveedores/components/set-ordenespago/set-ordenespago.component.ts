import { Component, OnInit } from '@angular/core';
import {DATOS_GIRO_ORDEN, CONF_ORDENPAGO} from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-set-ordenespago',
  templateUrl: './set-ordenespago.component.html',
  styleUrls: ['./set-ordenespago.component.scss']
})
export class SetOrdenespagoComponent implements OnInit {

  configuration: any;
  datosGiroOrdenesPago: any;

  datosSeleccionados: any;
  
  constructor() {
    this.datosSeleccionados = [];
    this.configuration = CONF_ORDENPAGO;
    this.datosGiroOrdenesPago = DATOS_GIRO_ORDEN;
   }

  ngOnInit() {
  }

  agregar() {
    this.datosSeleccionados.push('a');
  }

}
