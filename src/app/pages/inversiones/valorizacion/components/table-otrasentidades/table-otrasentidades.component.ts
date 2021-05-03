import { Component, OnInit } from '@angular/core';
import { DATOS_TABLA_OTRASENTIDADES, CONFIGURACION_TABLA_OTRASENTIDADES } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-table-otrasentidades',
  templateUrl: './table-otrasentidades.component.html',
  styleUrls: ['./table-otrasentidades.component.scss']
})
export class TableOtrasentidadesComponent implements OnInit {

  configValorizacion: any;
  datosValorizacion: any;

  constructor() {
    this.datosValorizacion = DATOS_TABLA_OTRASENTIDADES;
    this.configValorizacion = CONFIGURACION_TABLA_OTRASENTIDADES;

   }

  ngOnInit() {
  }

}
