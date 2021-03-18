import { Component, OnInit } from '@angular/core';
import { DATOS_TABLASOLICITUD, CONFIGURACION_TABLASOLICITUD } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-table-solicitudavances',
  templateUrl: './table-solicitudavances.component.html',
  styleUrls: ['./table-solicitudavances.component.scss']
})
export class TableSolicitudavancesComponent implements OnInit {

  configSolicitudes: any;
  datosSolicitudes: any;

  constructor() {
    this.datosSolicitudes = DATOS_TABLASOLICITUD;
    this.configSolicitudes = CONFIGURACION_TABLASOLICITUD;

   }

  ngOnInit() {
  }

}
