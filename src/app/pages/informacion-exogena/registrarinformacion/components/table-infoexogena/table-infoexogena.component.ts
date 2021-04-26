import { Component, OnInit } from '@angular/core';
import { DATOS_TABLA_INFOEXOGENA, CONFIGURACION_TABLA_INFOEXOGENA } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-table-infoexogena',
  templateUrl: './table-infoexogena.component.html',
  styleUrls: ['./table-infoexogena.component.scss']
})
export class TableInfoexogenaComponent implements OnInit {

  configInfoExogena: any;
  datosInfoExogena: any;

  constructor() {
    this.datosInfoExogena = DATOS_TABLA_INFOEXOGENA;
    this.configInfoExogena = CONFIGURACION_TABLA_INFOEXOGENA;

   }

  ngOnInit() {
  }

}
