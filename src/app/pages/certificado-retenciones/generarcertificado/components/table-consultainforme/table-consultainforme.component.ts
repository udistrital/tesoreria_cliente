import { Component, OnInit } from '@angular/core';
import { CONFIGURACION_TABLAINFORMES, DATOS_TABLAINFORMES } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-table-consultainforme',
  templateUrl: './table-consultainforme.component.html',
  styleUrls: ['./table-consultainforme.component.scss']
})
export class TableConsultainformeComponent implements OnInit {

  configGenerarCertificado: any;
  datosGenerarCertificado: any;

  constructor() {
    this.configGenerarCertificado = CONFIGURACION_TABLAINFORMES;
    this.datosGenerarCertificado = DATOS_TABLAINFORMES;
  }

  ngOnInit() {
  }

}
