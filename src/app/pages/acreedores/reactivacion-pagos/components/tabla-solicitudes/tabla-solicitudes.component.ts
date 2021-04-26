import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { SharedService } from '../../../../../shared/services/shared.service';
import { CONFIGURACION_TABLA_SOLICITUDES_PAGO, DATOS_SOLICITUDES_PAGO } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-tabla-solicitudes',
  templateUrl: './tabla-solicitudes.component.html',
  styleUrls: ['./tabla-solicitudes.component.scss']
})
export class TablaSolicitudesComponent implements OnInit, OnDestroy {

  configuracion: any;
  datos: any[];
  title: any;
  subscription$: any;

  constructor(
    private store: Store<any>,
    private sharedService: SharedService,
    private route: Router,
  ) {
    this.configuracion = CONFIGURACION_TABLA_SOLICITUDES_PAGO;
    this.datos = DATOS_SOLICITUDES_PAGO;
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  ngOnInit() {
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((data: any) => {
      if (this.sharedService.IfStore(data)) {

        if (data.accion.title === 'Editar') {
          this.route.navigate(['pages/acreedores/reactivacion-pagos/respuesta-solicitud']);
          this.store.dispatch(LoadFilaSeleccionada(null));
        }

      }
    });
  }

}
