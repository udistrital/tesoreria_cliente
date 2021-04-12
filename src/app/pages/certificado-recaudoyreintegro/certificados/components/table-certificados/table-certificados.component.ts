import { Component, OnInit } from '@angular/core';
import { DATOS_TABLACERTIFICADOS, CONFIGURACION_TABLACERTIFICADOS } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-table-certificados',
  templateUrl: './table-certificados.component.html',
  styleUrls: ['./table-certificados.component.scss']
})
export class TableCertificadosComponent implements OnInit {

  configCertificados: any;
  datosCertificados: any;


  constructor() {
    this.datosCertificados = DATOS_TABLACERTIFICADOS;
    this.configCertificados = CONFIGURACION_TABLACERTIFICADOS;
  }

  ngOnInit() {
  }

}
