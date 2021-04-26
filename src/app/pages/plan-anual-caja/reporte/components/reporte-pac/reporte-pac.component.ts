import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadCentroGestor, LoadAreaFuncional, GetVigenciaActual } from '../../../../../shared/actions/shared.actions';
import { getVigenciaActual } from '../../../../../shared/selectors/shared.selectors';

@Component({
  selector: 'ngx-reporte-pac',
  templateUrl: './reporte-pac.component.html',
  styleUrls: ['./reporte-pac.component.scss']
})
export class ReportePacComponent implements OnInit, OnDestroy {

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
  ngOnDestroy(): void {
    this.subscription3$.unsubscribe();
  }
  ngOnInit() {
    this.subscription3$ = this.store.select(getVigenciaActual).subscribe((vigencia: any) => {
      if (vigencia) {
        this.FechasForm = this.fb.group({
          FechaInicio: [],
          FechaFin: [],
          Vigencia: [vigencia[0].valor],
        });
      }
    });
  }

  GenerarReporte() {
    this.route.navigate(['pages/plan-anual-caja/reporte/revision-reporte-pac']);
  }

}
