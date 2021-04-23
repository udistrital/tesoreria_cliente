import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CONFIGURACION_TABLA_CONSULTA_MATRICULAS } from '../../../consulta-matriculas/interfaces/interfaces';
import { DetalleGeneralMoraComponent } from '../../../reporte-mora/components/detalle-general-mora/detalle-general-mora.component';
import { DATOS_REPORTE_MORA } from '../../../reporte-mora/interfaces/interfaces';

@Component({
  selector: 'ngx-detalle-control-mora',
  templateUrl: './detalle-control-mora.component.html',
  styleUrls: ['./detalle-control-mora.component.scss']
})
export class DetalleControlMoraComponent implements OnInit {

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
    this.matDialogRef.close()
  }


}
