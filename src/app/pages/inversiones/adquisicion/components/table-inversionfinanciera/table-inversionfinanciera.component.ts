import { Component, OnInit } from '@angular/core';
import { DATOS_TABLA_ADQUISICION, CONFIGURACION_TABLA_ADQUISICION } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-table-inversionfinanciera',
  templateUrl: './table-inversionfinanciera.component.html',
  styleUrls: ['./table-inversionfinanciera.component.scss']
})
export class TableInversionfinancieraComponent implements OnInit {

  configAdquisicion: any;
  datosAdquisicion: any;

  constructor() {
    this.datosAdquisicion = DATOS_TABLA_ADQUISICION;
    this.configAdquisicion = CONFIGURACION_TABLA_ADQUISICION;

   }

  ngOnInit() {
  }

}
