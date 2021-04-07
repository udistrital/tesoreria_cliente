import { Component, OnInit } from '@angular/core';
import { DATOS_TABLA_OTRASENTIDADES, CONFIGURACION_TABLA_OTRASENTIDADES } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-table-otrasentidaes',
  templateUrl: './table-otrasentidaes.component.html',
  styleUrls: ['./table-otrasentidaes.component.scss']
})
export class TableOtrasentidaesComponent implements OnInit {

  configValorizacion: any;
  datosValorizacion: any;

  constructor() {
    this.datosValorizacion = DATOS_TABLA_OTRASENTIDADES;
    this.configValorizacion = CONFIGURACION_TABLA_OTRASENTIDADES;

   }

  ngOnInit() {
  }

}
