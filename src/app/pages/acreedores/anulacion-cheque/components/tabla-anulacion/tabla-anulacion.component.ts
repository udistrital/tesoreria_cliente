import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { SharedService } from '../../../../../shared/services/shared.service';
import { CONFIGURACION_TABLA_ANULACION_CHEQUES, DATOS_ANULACION_CHEQUE } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-tabla-anulacion',
  templateUrl: './tabla-anulacion.component.html',
  styleUrls: ['./tabla-anulacion.component.scss']
})
export class TablaAnulacionComponent implements OnInit {

  configuracion: any;
  datos: any[];
  title: any;
  subscription$: any;

  constructor(
    private store: Store<any>,
    private sharedService: SharedService,
    private route: Router,
  ) {
    this.configuracion = CONFIGURACION_TABLA_ANULACION_CHEQUES;
    this.datos = DATOS_ANULACION_CHEQUE;
  }

  ngOnInit() {
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((data: any) => {
      if (this.sharedService.IfStore(data)) {
        if (data.accion.title === 'Editar Anulacion Orden Pago') {
          this.route.navigate(['pages/acreedores/anulacion-cheque/detalle-giro']);
          this.store.dispatch(LoadFilaSeleccionada(null));
        }

      }
    });
  }

}
