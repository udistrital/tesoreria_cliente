import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { CONFIGURACION_TABLA_DETALLE_GIRO, CONFIGURACION_TABLA_DETALLE_GIRO_2, DATOS_DETALLE_GIRO } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-modal-cheque-anulado',
  templateUrl: './modal-cheque-anulado.component.html',
  styleUrls: ['./modal-cheque-anulado.component.scss']
})
export class ModalChequeAnuladoComponent implements OnInit {
  configuracion: any;
  datos: any;

  constructor(
    private matDialogRef: MatDialogRef<ModalChequeAnuladoComponent>,
    private router: Router,
  ) {
    this.configuracion = CONFIGURACION_TABLA_DETALLE_GIRO_2;
    this.datos = [DATOS_DETALLE_GIRO[0]];
  }

  ngOnInit() {
  }

  RealizarContabilizacion() {
    this.router.navigate(['pages/acreedores/anulacion-cheque/contabilizacion']);
    this.matDialogRef.close();
  }
}
