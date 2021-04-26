import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DETALLE_CHEQUE } from '../../interfaces/interfaces';
import { ModalChequeAnuladoComponent } from '../modal-cheque-anulado/modal-cheque-anulado.component';

@Component({
  selector: 'ngx-anular-cheque',
  templateUrl: './anular-cheque.component.html',
  styleUrls: ['./anular-cheque.component.scss']
})
export class AnularChequeComponent implements OnInit {
  datos: any;

  constructor(
    private route: Router,
    private matDialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.datos = DETALLE_CHEQUE;
  }

  GenerarReporte() {
    this.route.navigate(['pages/acreedores/anulacion-cheque/tabla-anulacion']);
  }

  Anular() {
    this.matDialog.open(ModalChequeAnuladoComponent);
  }
}
