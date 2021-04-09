import { Component, OnInit, OnDestroy } from '@angular/core';
import { CONF_GIRONOMINA, DATOS_GIRONOMINA } from '../../interfaces/interfaces';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getAccionTabla } from '../../../../../shared/selectors/shared.selectors';
import { LoadAccionTabla } from '../../../../../shared/actions/shared.actions';
@Component({
  selector: 'ngx-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit, OnDestroy {

  configuration: any;
  datosGiroNomina: any;
  subscription$: any;

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  constructor(
    private store: Store<any>,
    private router: Router,
  ) {
    this.configuration = CONF_GIRONOMINA;
    this.datosGiroNomina = DATOS_GIRONOMINA;
   }

  ngOnInit() {
    this.subscription$ = this.store.select(getAccionTabla).subscribe((accion: any) => {
      if (accion) {
        if (Object.keys(accion)[0] !== 'type') {
          this.router.navigate(['pages/giros/nomina/creargiro']);
          this.store.dispatch(LoadAccionTabla(null));
        }
      }
    });
  }

}
