import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DATOS_SOLICITUDES_PAGO } from '../../interfaces/interfaces';
import { ConsultaOrdenesPagoComponent } from '../consulta-ordenes-pago/consulta-ordenes-pago.component';

@Component({
  selector: 'ngx-respuesta-solicitud',
  templateUrl: './respuesta-solicitud.component.html',
  styleUrls: ['./respuesta-solicitud.component.scss']
})
export class RespuestaSolicitudComponent implements OnInit {
  Solicitud: any;

  constructor(
    private matDialog: MatDialog
  ) {
    this.Solicitud = DATOS_SOLICITUDES_PAGO[0];
  }

  ngOnInit() {
  }

  OnCreate() {
    this.matDialog.open(ConsultaOrdenesPagoComponent);
  }

}
