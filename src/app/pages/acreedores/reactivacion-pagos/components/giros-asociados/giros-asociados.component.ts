import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { SharedService } from '../../../../../shared/services/shared.service';
import { CONFIGURACION_TABLA_DETALLE_GIRO, DATOS_DETALLE_GIRO } from '../../../anulacion-cheque/interfaces/interfaces';
import { ConsultaOrdenesPagoComponent } from '../consulta-ordenes-pago/consulta-ordenes-pago.component';

@Component({
  selector: 'ngx-giros-asociados',
  templateUrl: './giros-asociados.component.html',
  styleUrls: ['./giros-asociados.component.scss']
})
export class GirosAsociadosComponent implements OnInit {

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

    const data = JSON.parse(JSON.stringify(CONFIGURACION_TABLA_DETALLE_GIRO));
    delete data.rowActions;
    this.configuracion = data;
    this.datos = DATOS_DETALLE_GIRO;
  }

  ngOnInit() {
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((data: any) => {
      if (this.sharedService.IfStore(data)) {

        if (data.accion.title === 'Editar') {
          this.matDialog.open(GirosAsociadosComponent);
          this.store.dispatch(LoadFilaSeleccionada(null));
        }

      }
    });
  }
  OnClose() {
    this.matDialogRef.close();
  }

}
