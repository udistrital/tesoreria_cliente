import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { SharedService } from '../../../../../shared/services/shared.service';
import { CONFIGURACION_TABLA_CONSULTA_ACREEDORES, DATOS_CONSULTA_ACREEDORES } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-tabla-terceros',
  templateUrl: './tabla-terceros.component.html',
  styleUrls: ['./tabla-terceros.component.scss']
})
export class TablaTercerosComponent implements OnInit, OnDestroy {

  configuracion: any;
  datos: any[];
  title: any;
  subscription$: any;

  constructor(
    private store: Store<any>,
    private sharedService: SharedService,
    private route: Router,
  ) {
    this.configuracion = CONFIGURACION_TABLA_CONSULTA_ACREEDORES;
    this.datos = DATOS_CONSULTA_ACREEDORES;
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
  ngOnInit() {
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((data: any) => {
      if (this.sharedService.IfStore(data)) {

        if (data.accion.title === 'Editar Consulta de Acreedores') {
          this.route.navigate(['pages/acreedores/consulta/detalle']);
          this.store.dispatch(LoadFilaSeleccionada(null));
        }

      }
    });
  }
}
