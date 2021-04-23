import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadFilaSeleccionada } from '../../../../../shared/actions/shared.actions';
import { getFilaSeleccionada } from '../../../../../shared/selectors/shared.selectors';
import { SharedService } from '../../../../../shared/services/shared.service';
import { CONFIGURACION_TABLA_CONSULTA_MATRICULAS, DATOS_CONSULTA_MATRICULAS } from '../../../consulta-matriculas/interfaces/interfaces';

@Component({
  selector: 'ngx-tabla-control-mora',
  templateUrl: './tabla-control-mora.component.html',
  styleUrls: ['./tabla-control-mora.component.scss']
})
export class TablaControlMoraComponent implements OnInit {

  configuracion: any;
  datos: any[];
  title: any;
  subscription$: any;

  constructor(
    private store: Store<any>,
    private sharedService: SharedService,
    private route: Router,
  ) {
    this.configuracion = CONFIGURACION_TABLA_CONSULTA_MATRICULAS;
    this.datos = DATOS_CONSULTA_MATRICULAS;
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
  ngOnInit() {
    this.subscription$ = this.store.select(getFilaSeleccionada).subscribe((data: any) => {
      if (this.sharedService.IfStore(data)) {
        if (data.accion.title === 'Editar') {
          this.AgregarRegistro()
          this.store.dispatch(LoadFilaSeleccionada(null));
        }

      }
    });
  }
  AgregarRegistro() {
    this.route.navigate(['pages/recaudo-matriculas/consulta-matriculas/contabilizacion']);
  }

}
