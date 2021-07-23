import { Component, OnInit } from '@angular/core';
import { CONFIGURACION_TABLASOLICITUD, DATOS_TABLASOLICITUD } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-table-solicitudes',
  templateUrl: './table-solicitudes.component.html',
  styleUrls: ['./table-solicitudes.component.scss']
})
export class TableSolicitudesComponent implements OnInit {

  configSolicitud: any;
  datosSolicitud: any;


  constructor() {
    this.datosSolicitud = DATOS_TABLASOLICITUD;
    this.configSolicitud = CONFIGURACION_TABLASOLICITUD;
  }

  ngOnInit() {
  }

}
