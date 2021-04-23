import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CONFIGURACION_TABLA_CONSULTA_MATRICULAS } from '../../../consulta-matriculas/interfaces/interfaces';
import { DATOS_REPORTE_MORA } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-detalle-general-mora',
  templateUrl: './detalle-general-mora.component.html',
  styleUrls: ['./detalle-general-mora.component.scss']
})
export class DetalleGeneralMoraComponent implements OnInit {

  configuracion: any;
  datos: any[];
  title: any;
  subscription$: any;

  constructor(
    private matDialogRef: MatDialogRef<DetalleGeneralMoraComponent>
  ) {
    this.configuracion = CONFIGURACION_TABLA_CONSULTA_MATRICULAS;
    this.datos = DATOS_REPORTE_MORA;
  }
  ngOnInit() {
  }
  OnClose() {
    this.matDialogRef.close();
  }

}
