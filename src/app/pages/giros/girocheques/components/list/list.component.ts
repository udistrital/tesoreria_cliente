import { Component, OnInit, OnDestroy } from '@angular/core';
import { DATOS_GIROCHEQUE, CONFIGURACION_GIROCHEQUES } from '../../interfaces/interfaces';
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
  datosGiroCheque: any;
  subscriptionTabla$: any;

  constructor(
    private store: Store<any>,
    private router: Router,
  ) {
    this.configuration = CONFIGURACION_GIROCHEQUES;
    this.datosGiroCheque = DATOS_GIROCHEQUE;
  }
  ngOnDestroy() {
    this.subscriptionTabla$.unsubscribe();
  }

  ngOnInit() {
    this.subscriptionTabla$ = this.store.select(getAccionTabla).subscribe((accion: any) => {
      if (accion) {
        if (Object.keys(accion)[0] !== 'type') {
          this.router.navigate(['pages/giros/cheques/creargiro']);
          this.store.dispatch(LoadAccionTabla(null));
        }
      }
    });
  }

}
