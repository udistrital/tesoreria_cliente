import { Component, OnInit, OnDestroy } from '@angular/core';
import { CONFIGURACION_GIROPROVEEDORES, DATOS_GIROPROVEEDORES } from '../../interfaces/interfaces';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getAccionTabla } from '../../../../../shared/selectors/shared.selectors';
import { LoadAccionTabla } from '../../../../../shared/actions/shared.actions';


@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  configuration: any;
  datosGiroProveedores: any;
  subscriptionTabla$: any;

  constructor(
    private store: Store<any>,
    private router: Router,
  ) {
    this.configuration = CONFIGURACION_GIROPROVEEDORES;
    this.datosGiroProveedores = DATOS_GIROPROVEEDORES;
  }

  ngOnDestroy() {
    this.subscriptionTabla$.unsubscribe();
  }

  ngOnInit() {
    this.subscriptionTabla$ = this.store.select(getAccionTabla).subscribe((accion: any) => {
      if (accion) {
        if (Object.keys(accion)[0] !== 'type') {
          this.router.navigate(['pages/giros/proveedores/creargiro']);
          this.store.dispatch(LoadAccionTabla(null));
        }
      }
    });
  }

}
