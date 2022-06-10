import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CONF_INGRESOS,
  DATOS_INGRESOS,
  TIPOS_INGRESOS,
} from '../../interfaces/interfaces';
import { Store } from '@ngrx/store';
import { getAccionTabla } from '../../../../shared/selectors/shared.selectors';
import { LoadAccionTabla } from '../../../../shared/actions/shared.actions';
import { combineLatest } from 'rxjs';
import { getTipoIngreso } from '../../selectors/ingresos.selectors';
import { SharedService } from '../../../../shared/services/shared.service';
import { OPCIONES_AREA_FUNCIONAL } from '../../../../shared/interfaces/interfaces';
import { FormBuilder, FormGroup } from '@angular/forms';
import { cargarTipoIngreso } from '../../actions/ingresos.actions';

@Component({
  selector: 'ngx-lista-ingresos',
  templateUrl: './lista-ingresos.component.html',
  styleUrls: ['./lista-ingresos.component.scss'],
})
export class ListaIngresosComponent implements OnInit, OnDestroy {
  datosIngresos: any;
  configuration: any;
  subscriptionTabla$: any;
  subscriptionTipo$: any;
  tipoIngreso: any;
  tiposIngresos: any;
  tablaIngresos: FormGroup;
  tipoIngresoSelect: any;
  selected: any;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private router: Router,
    private sharedService: SharedService
  ) {
    this.configuration = CONF_INGRESOS;
    this.datosIngresos = DATOS_INGRESOS;
    this.tiposIngresos = TIPOS_INGRESOS;
    this.tablaIngresos = this.formBuilder.group({
      tipoIngreso: [''],
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

  ngSubmit() {}

  ngOnInit() {
    this.store.select(getTipoIngreso).subscribe((res) => {
      if (res && res.tipoIngreso) {
        this.selected = {
          Nombre: res.tipoIngreso.Nombre,
          label: res.tipoIngreso.label,
        };
        this.tipoIngresoSelect = this.selected.label;
      } else {
        this.selected = null;
        this.tipoIngresoSelect = 'TODOS';
      }

    });

    this.subscriptionTabla$ = combineLatest([
      this.store.select(getAccionTabla),
      this.store.select(getTipoIngreso),
    ]).subscribe(([accion, tipoIngreso]) => {
      if (this.sharedService.IfStore(accion)) {
        if (this.sharedService.IfStore(tipoIngreso)) {
          this.tipoIngreso = tipoIngreso.tipoIngreso;
          this.router.navigate([`pages/ingresos/crear/${this.tipoIngreso.Nombre}`]);
          this.store.dispatch(LoadAccionTabla(null));
        }
      }
    });
  }

  cambioTipoIngreso() {
    if (this.selected) {
      this.tipoIngresoSelect = this.selected.label;
      this.configuration.tableActions[0].disabled = false;
      this.router.navigate([`/pages/ingresos/lista/${this.selected.Nombre}`]);

      this.store.dispatch(
        cargarTipoIngreso({
          tipoIngreso: {
            Nombre: this.selected.Nombre,
            label: this.selected.label,
          },
        })
      );
    } else {
      this.configuration.tableActions[0].disabled = true;
      this.tipoIngresoSelect = 'todos';
      this.router.navigate([`/pages/ingresos/lista`]);

      this.store.dispatch(
        cargarTipoIngreso({
          tipoIngreso: null,
        })
      );
    }
  }
}
