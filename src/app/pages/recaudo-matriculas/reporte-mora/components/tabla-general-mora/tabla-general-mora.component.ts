import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { SharedService } from '../../../../../shared/services/shared.service';
import { CONFIGURACION_TABLA_CONSULTA_MATRICULAS } from '../../../consulta-matriculas/interfaces/interfaces';
import { DATOS_REPORTE_MORA } from '../../interfaces/interfaces';
import { DetalleGeneralMoraComponent } from '../detalle-general-mora/detalle-general-mora.component';

@Component({
  selector: 'ngx-tabla-general-mora',
  templateUrl: './tabla-general-mora.component.html',
  styleUrls: ['./tabla-general-mora.component.scss']
})
export class TablaGeneralMoraComponent implements OnInit, OnDestroy {

  configuracion: any;
  datos: any[];
  title: any;
  subscription$: any;

  constructor(
    private store: Store<any>,
    private sharedService: SharedService,
    private route: Router,
    private matDialog: MatDialog
  ) {
    this.configuracion = CONFIGURACION_TABLA_CONSULTA_MATRICULAS;
    this.datos = DATOS_REPORTE_MORA;
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
    this.matDialog.open(DetalleGeneralMoraComponent);
  }

}
