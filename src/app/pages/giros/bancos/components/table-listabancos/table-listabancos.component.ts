import { Component, OnInit } from '@angular/core';
import { DATOS_TABLABANCOS, CONFIGURACION_TABLABANCOS } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-table-listabancos',
  templateUrl: './table-listabancos.component.html',
  styleUrls: ['./table-listabancos.component.scss']
})
export class TableListabancosComponent implements OnInit {


  configBancos: any;
  datosBancos: any;

  constructor() {

    this.datosBancos = DATOS_TABLABANCOS;
    this.configBancos = CONFIGURACION_TABLABANCOS;

    }

  ngOnInit() {

  }

}
