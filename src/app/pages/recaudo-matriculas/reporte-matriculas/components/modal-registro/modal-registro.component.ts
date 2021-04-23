import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { SharedService } from '../../../../../shared/services/shared.service';
import { CONFIGURACION_TABLA_REPORTE_CUOTAS, DATOS_REPORTE_CUOTAS } from '../../interfaces/interfaces';
import { ModalCuotaComponent } from '../modal-cuota/modal-cuota.component';

@Component({
  selector: 'ngx-modal-registro',
  templateUrl: './modal-registro.component.html',
  styleUrls: ['./modal-registro.component.scss']
})
export class ModalRegistroComponent implements OnInit {

  configuracion: any;
  datos: any[];
  title: any;
  subscription$: any;

  constructor(
    private store: Store<any>,
    private sharedService: SharedService,
    private route: Router,
    private matDialog: MatDialog,
    private matDialogRef: MatDialogRef<ModalRegistroComponent>,
  ) {
    this.configuracion = CONFIGURACION_TABLA_REPORTE_CUOTAS;
    this.datos = DATOS_REPORTE_CUOTAS;
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
  ngOnInit() {
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((data: any) => {
      if (this.sharedService.IfStore(data)) {
        if (data.accion.title === 'Editar') {
          this.AgregarRegistro();
          this.store.dispatch(LoadFilaSeleccionada(null));
        }
      }
    });
  }
  AgregarRegistro() {
    this.matDialog.open(ModalCuotaComponent)
  }
  OnClose() {
    this.matDialogRef.close()
  }
}

