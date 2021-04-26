import { Component, OnInit } from '@angular/core';
import { CONFIGURACION_TABLA_DETALLE_GIRO, DATOS_DETALLE_GIRO } from '../../../anulacion-cheque/interfaces/interfaces';

@Component({
  selector: 'ngx-detalle-giro',
  templateUrl: './detalle-giro.component.html',
  styleUrls: ['./detalle-giro.component.scss']
})
export class DetalleGiroComponent implements OnInit {

  configuracion: any;
  datos: any[];
  title: any;
  subscription$: any;

  constructor(
  ) {
    const config = JSON.parse(JSON.stringify(CONFIGURACION_TABLA_DETALLE_GIRO));
    delete config.rowActions;
    const dataconfig: any[] = config.dataConfig;
    dataconfig.splice(4, 1);
    config.dataConfig = dataconfig;
    this.configuracion = config;
    this.datos = [DATOS_DETALLE_GIRO[0]];
  }
  ngOnInit() {

  }

}
