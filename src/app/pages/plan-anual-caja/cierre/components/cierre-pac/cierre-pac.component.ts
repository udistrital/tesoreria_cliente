import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetVigenciaActual, LoadCentroGestor, LoadAreaFuncional } from '../../../../../shared/actions/shared.actions';
import { getVigenciaActual } from '../../../../../shared/selectors/shared.selectors';
import { CONFIGURACION_TABLA_REPORTE, DATOS_TABLA_REPORTE } from '../../../reporte/interfaces/interfaces';

@Component({
  selector: 'ngx-cierre-pac',
  templateUrl: './cierre-pac.component.html',
  styleUrls: ['./cierre-pac.component.scss']
})
export class CierrePacComponent implements OnInit {

  configuracion: any;
  FechasForm: FormGroup;
  datos: any[];
  title: any;
  subscription$: any;
  subscription3$: any;
  Vigencia: any;

  constructor(
    private store: Store<any>,
    private route: Router,
    private fb: FormBuilder,
  ) {
    this.store.dispatch(GetVigenciaActual({ offset: 0 }));
    this.title = 'PLAN MENSUALIZADO DE CAJA';
    this.store.dispatch(LoadCentroGestor({
      CentroGestor: 230,
    }));
    this.store.dispatch(LoadAreaFuncional({
      Id: 1,
      Nombre: 'Rector',
      label: '01 - Rector',
    }));
  }

  ngOnInit() {
    this.subscription3$ = this.store.select(getVigenciaActual).subscribe((vigencia: any) => {
      if (vigencia) {
        this.FechasForm = this.fb.group({
          Vigencia: [vigencia[0].valor],
        });
      }
    });
  }

  GenerarReporte() {
    this.route.navigate(['pages/plan-anual-caja/reporte/tabla-cierre-pac']);
  }

}
