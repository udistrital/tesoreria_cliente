import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadAccionTabla, LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { getAccionTabla, getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { SharedService } from '../../../../../shared/services/shared.service';
import { CONFIGURACION_TABLA_REPORTE_MATRICULAS, DATOS_REPORTE_MATRICULAS } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-tabla-reporte-matriculas',
  templateUrl: './tabla-reporte-matriculas.component.html',
  styleUrls: ['./tabla-reporte-matriculas.component.scss']
})
export class TablaReporteMatriculasComponent implements OnInit, OnDestroy {

  configuracion: any;
  datos: any[];
  title: any;
  subscription$: any;

  constructor(
    private store: Store<any>,
    private sharedService: SharedService,
    private route: Router,
  ) {
    this.configuracion = CONFIGURACION_TABLA_REPORTE_MATRICULAS;
    this.datos = DATOS_REPORTE_MATRICULAS;
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
    this.route.navigate(['pages/recaudo-matriculas/reporte-matriculas/detalle-reporte']);
  }
}
