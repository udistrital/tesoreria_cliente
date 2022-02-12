import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CONF_INGRESOS, DATOS_INGRESOS } from '../../interfaces/interfaces';
import { Store } from '@ngrx/store';
import { getAccionTabla } from '../../../../shared/selectors/shared.selectors';
import { LoadAccionTabla } from '../../../../shared/actions/shared.actions';
import { combineLatest } from 'rxjs';
import { getTipoIngreso } from '../../selectors/ingresos.selectors';
import { SharedService } from '../../../../shared/services/shared.service';
import { OPCIONES_AREA_FUNCIONAL } from '../../../../shared/interfaces/interfaces';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-lista-ingresos',
  templateUrl: './lista-ingresos.component.html',
  styleUrls: ['./lista-ingresos.component.scss']
})
export class ListaIngresosComponent implements OnInit, OnDestroy {

  datosIngresos: any;
  configuration: any;
  subscriptionTabla$: any;
  subscriptionTipo$: any;
  tipoIngreso: any;
  opcionesAreaFuncional: any;
  tablaIngresos: FormGroup;
  tipoIngresoSelect: any;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private router: Router,
    private sharedService: SharedService,
  ) {
    this.configuration = CONF_INGRESOS;
    this.datosIngresos = DATOS_INGRESOS;
    this.opcionesAreaFuncional = OPCIONES_AREA_FUNCIONAL;
    this.tablaIngresos = this.formBuilder.group({
      tipoIngreso: ['']
    });
  }

  ngOnDestroy() {
    if (this.subscriptionTipo$ !== undefined) {
      this.subscriptionTipo$.unsubscribe();
    }
    if (this.subscriptionTabla$ !== undefined) {
      this.subscriptionTabla$.unsubscribe();
    }
  }

  ngSubmit() {
  }

  ngOnInit() {
    this.subscriptionTabla$ = combineLatest([
      this.store.select(getAccionTabla),
      this.store.select(getTipoIngreso)
    ]).subscribe(([accion, tipoIngreso]) => {
      if (this.sharedService.IfStore(accion)) {
        if (this.sharedService.IfStore(tipoIngreso)) {
          this.tipoIngreso = tipoIngreso.tipo;
          this.router.navigate(['pages/ingresos/' + this.tipoIngreso + '/crear']);
          this.store.dispatch(LoadAccionTabla(null));
        }
      }
    });
  }

  cambioTipoIngreso() {
    this.tipoIngresoSelect = this.tablaIngresos.value.tipoIngreso.Nombre;
    this.router.navigate(['/pages/ingresos/' + this.tablaIngresos.value.tipoIngreso.Nombre + '/lista']);
  }

}
