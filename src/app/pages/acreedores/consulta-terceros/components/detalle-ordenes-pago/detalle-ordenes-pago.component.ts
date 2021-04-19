import { Component, OnInit } from '@angular/core';
import {
  CONFIGURACION_TABLA_IMPUTACION,
  CONFIGURACION_TABLA_MOVIMIENTO_CONTABLE,
  DATOS_IMPUTACION, DATOS_MOVIMIENTO_CONTABLE,
  DATOS_ORDEN_PAGO
} from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-detalle-ordenes-pago',
  templateUrl: './detalle-ordenes-pago.component.html',
  styleUrls: ['./detalle-ordenes-pago.component.scss']
})
export class DetalleOrdenesPagoComponent implements OnInit {

  configuracion1: any;
  datos1: any;
  configuracion2: any;
  datos2: any;
  Datos: any;

  constructor() {
    this.Datos = DATOS_ORDEN_PAGO;
    this.configuracion1 = CONFIGURACION_TABLA_IMPUTACION;
    this.datos1 = DATOS_IMPUTACION;
    this.configuracion2 = CONFIGURACION_TABLA_MOVIMIENTO_CONTABLE;
    this.datos2 = DATOS_MOVIMIENTO_CONTABLE;
  }

  ngOnInit() {
  }

}
