import { Component, OnInit } from '@angular/core';
import { CONFIGURACION_TABLA_DECLARACION, DATOS_TABLA_DECLARACION } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-table-declaraciones',
  templateUrl: './table-declaraciones.component.html',
  styleUrls: ['./table-declaraciones.component.scss']
})
export class TableDeclaracionesComponent implements OnInit {

  configDeclaracionRetencion: any;
  datosDeclaracionRetencion: any;

  constructor() {
  this.configDeclaracionRetencion = CONFIGURACION_TABLA_DECLARACION;
  this.datosDeclaracionRetencion = DATOS_TABLA_DECLARACION;

  }

  ngOnInit() {
  }

}
