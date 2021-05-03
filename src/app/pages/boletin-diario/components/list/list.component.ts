import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getAccionTabla } from '../../../../shared/selectors/shared.selectors';
import { LoadAccionTabla } from '../../../../shared/actions/shared.actions';
import { CONF_BOLETINES, DATOS_BOLETINES } from '../../interfaces/interfaces';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  configuration: any;
  datosBoletines: any;
  subscriptionTabla$: any;

  constructor(
    private store: Store<any>,
    private router: Router,
  ) {
    this.configuration = CONF_BOLETINES;
    this.datosBoletines = DATOS_BOLETINES;
  }

  ngOnDestroy() {
    this.subscriptionTabla$.unsubscribe();
  }

  ngOnInit() {
    this.subscriptionTabla$ = this.store.select(getAccionTabla).subscribe((accion: any) => {
      if (accion) {
        if (Object.keys(accion)[0] !== 'type') {
          this.router.navigate(['pages/boletin/crear']);
          this.store.dispatch(LoadAccionTabla(null));
        }
      }
    });
  }

}
