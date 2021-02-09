import { Component, OnInit } from '@angular/core';
import { CONFIGURACION_LISTA, DATOS_LISTA } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-table-legalizacion-reintegros',
  templateUrl: './table-legalizacion-reintegros.component.html',
  styleUrls: ['./table-legalizacion-reintegros.component.scss']
})
export class TableLegalizacionReintegrosComponent implements OnInit {

  configReintegros: any;
  datosReintegros: any;

  constructor() {
    this.datosReintegros = DATOS_LISTA;
    this.configReintegros = CONFIGURACION_LISTA;

   }

  ngOnInit() {
  }

}
