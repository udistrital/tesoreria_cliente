import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { SharedService } from '../../../../../shared/services/shared.service';
import { CONFIGURACION_TABLA_ANULACION_CHEQUES, CONFIGURACION_TABLA_DETALLE_GIRO, DATOS_ANULACION_CHEQUE, DATOS_DETALLE_GIRO } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-detalle-giro',
  templateUrl: './detalle-giro.component.html',
  styleUrls: ['./detalle-giro.component.scss']
})
export class DetalleGiroComponent implements OnInit {

  configuracion: any;
  datos: any[];
  title: any;
  subscription$: any;

  constructor(
    private store: Store<any>,
    private sharedService: SharedService,
    private route: Router,
  ) {
    this.configuracion = CONFIGURACION_TABLA_DETALLE_GIRO;
    this.datos = DATOS_DETALLE_GIRO;
  }

  ngOnInit() {
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((data: any) => {
      if (this.sharedService.IfStore(data)) {
        if (data.accion.title === 'Editar') {
          this.route.navigate(['pages/acreedores/anulacion-cheque/anular-cheque']);
          this.store.dispatch(LoadFilaSeleccionada(null));
        }

      }
    });
  }


}
