import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { SharedService } from '../../../../../shared/services/shared.service';
import { CONFIGURACION_TABLA_CONSULTA_ORDENES_PAGO, DATOS_CONSULTA_ORDENES_PAGO } from '../../interfaces/interfaces';
import { GirosAsociadosComponent } from '../giros-asociados/giros-asociados.component';

@Component({
  selector: 'ngx-consulta-ordenes-pago',
  templateUrl: './consulta-ordenes-pago.component.html',
  styleUrls: ['./consulta-ordenes-pago.component.scss']
})
export class ConsultaOrdenesPagoComponent implements OnInit {

  configuracion: any;
  datos: any[];
  title: any;
  subscription$: any;

  constructor(
    private store: Store<any>,
    private sharedService: SharedService,
    private matDialogRef: MatDialogRef<ConsultaOrdenesPagoComponent>,
    private matDialog: MatDialog,
  ) {
    this.configuracion = CONFIGURACION_TABLA_CONSULTA_ORDENES_PAGO;
    this.datos = DATOS_CONSULTA_ORDENES_PAGO;
  }

  ngOnInit() {
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((data: any) => {
      if (this.sharedService.IfStore(data)) {
       
        if (data.accion.title === 'Editar Ordenes de Pago') {
          this.matDialog.open(GirosAsociadosComponent);
          this.store.dispatch(LoadFilaSeleccionada(null));
        }
        
      }
    });
  }
  OnClose() {
    this.matDialogRef.close()
  }

}
