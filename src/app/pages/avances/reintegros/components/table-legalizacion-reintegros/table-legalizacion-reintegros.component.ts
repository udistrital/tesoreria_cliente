import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-table-legalizacion-reintegros',
  templateUrl: './table-legalizacion-reintegros.component.html',
  styleUrls: ['./table-legalizacion-reintegros.component.scss']
})
export class TableLegalizacionReintegrosComponent implements OnInit {

  configReintegros: any;
  datosReintegros: any;

  constructor() {
   // this.datosReintegros = DATOS_TABLASOLICITUD;
   // this.configReintegros = CONFIGURACION_TABLASOLICITUD;

   }

  ngOnInit() {
  }

}
