import { Component, OnInit } from '@angular/core';
import { CONFIGURACION_TABLARENDIMIENTOS, DATOS_TABLARENDIMIENTOS } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-table-retenciones',
  templateUrl: './table-retenciones.component.html',
  styleUrls: ['./table-retenciones.component.scss']
})
export class TableRetencionesComponent implements OnInit {

  configRetenciones: any;
  datosRetenciones: any;

  constructor() {
    this.configRetenciones = CONFIGURACION_TABLARENDIMIENTOS;
    this.datosRetenciones = DATOS_TABLARENDIMIENTOS;
  }

  ngOnInit() {
  }

}
