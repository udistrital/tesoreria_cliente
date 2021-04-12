import { Component, OnInit } from '@angular/core';
import { CONFIGURACION_TABLA_APROBACION, DATOS_TABLA_APROBACION } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-table-aprobaciones',
  templateUrl: './table-aprobaciones.component.html',
  styleUrls: ['./table-aprobaciones.component.scss']
})
export class TableAprobacionesComponent implements OnInit {

  configAprobaciones: any;
  datosAprobaciones: any;


  constructor() {
    this.datosAprobaciones = DATOS_TABLA_APROBACION;
    this.configAprobaciones = CONFIGURACION_TABLA_APROBACION;
  }

  ngOnInit() {
  }


}
