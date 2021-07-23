import { Component, OnInit, OnDestroy } from '@angular/core';
import { CONF_GIROSEGURIDAD, DATOS_GIROSEGURIDAD } from '../../interfaces/interfaces';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getAccionTabla } from '../../../../../shared/selectors/shared.selectors';
import { LoadAccionTabla } from '../../../../../shared/actions/shared.actions';

@Component({
  selector: 'ngx-lista-seguridad',
  templateUrl: './lista-seguridad.component.html',
  styleUrls: ['./lista-seguridad.component.scss']
})
export class ListaSeguridadComponent implements OnInit, OnDestroy {

  datosSeguridad: any;
  configuration: any;

  subscriptionTabla$: any;

  constructor(
    private store: Store<any>,
    private router: Router,
  ) {
    this.configuration = CONF_GIROSEGURIDAD;
    this.datosSeguridad = DATOS_GIROSEGURIDAD;
   }

  ngOnDestroy() {
    this.subscriptionTabla$.unsubscribe();
  }

  ngOnInit() {
    this.subscriptionTabla$ = this.store.select(getAccionTabla).subscribe((accion: any) => {
      if (accion) {
        if (Object.keys(accion)[0] !== 'type') {
          this.router.navigate(['pages/giros/seguridad/creargiro']);
          this.store.dispatch(LoadAccionTabla(null));
        }
      }
    });
  }

}
