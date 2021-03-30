import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getAccionTabla } from '../../../../../shared/selectors/shared.selectors';
import { LoadAccionTabla } from '../../../../../shared/actions/shared.actions';
import { CONFIGURACION_REVERSAR, DATOS_REVERSAR } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit, OnDestroy {

  configuration: any;
  datosReversar: any;
  subscription$: any;

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  constructor(
    private store: Store<any>,
    private router: Router,
  ) {
    this.configuration = CONFIGURACION_REVERSAR;
    this.datosReversar = DATOS_REVERSAR;
   }

  ngOnInit() {
    this.subscription$ = this.store.select(getAccionTabla).subscribe((accion: any) => {
      if (accion) {
        if (Object.keys(accion)[0] !== 'type') {
          this.router.navigate(['pages/giros/reversar/crear']);
          this.store.dispatch(LoadAccionTabla(null));
        }
      }
    });
  }
}
