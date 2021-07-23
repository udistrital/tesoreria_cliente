import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { SharedService } from '../../../../../shared/services/shared.service';
import { CONFIGURACION_TABLA_REPORTE_DETALLE, DATOS_REPORTE_DETALLE, DATOS_REPORTE_MATRICULAS } from '../../interfaces/interfaces';
import { ModalRegistroComponent } from '../modal-registro/modal-registro.component';

@Component({
  selector: 'ngx-detalle-reporte-matriculas',
  templateUrl: './detalle-reporte-matriculas.component.html',
  styleUrls: ['./detalle-reporte-matriculas.component.scss']
})
export class DetalleReporteMatriculasComponent implements OnInit, OnDestroy {

  configuracion: any;
  datos: any[];
  title: any;
  subscription$: any;

  constructor(
    private store: Store<any>,
    private sharedService: SharedService,
    private route: Router,
    private matDialog: MatDialog,
  ) {
    this.configuracion = CONFIGURACION_TABLA_REPORTE_DETALLE;
    this.datos = DATOS_REPORTE_DETALLE;
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
    this.matDialog.open(ModalRegistroComponent);
  }

  OnCreate() {
    console.warn("Funcionalidad aún no desarrollada")
  }

}
