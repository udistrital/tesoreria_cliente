import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetArbolCuentaContableCredito, GetArbolCuentaContableDebito, GetArbolRubro, GetModalidadesSeleccion } from '../actions/shared.actions';
import { getArbolRubro, getModalidadesSeleccion } from '../selectors/shared.selectors';

@Injectable({
  providedIn: 'root'
})
export class ParametricService {

  constructor(
    private store: Store<any>,
  ) {
  }

  CargarArbolRubros(fuente: any) {
    this.store.dispatch(GetArbolRubro({ branch: fuente }));
    this.store.select(getArbolRubro).subscribe((arbol: any) => {
      if (Object.keys(arbol).length === 0) {
      }
    });
  }

  CargarArbolCuentasContablesDebito() {
    this.store.dispatch(GetArbolCuentaContableDebito({}));
  }

  CargarArbolCuentasContablesCredito() {
    this.store.dispatch(GetArbolCuentaContableCredito({}));
  }

  CargarModalidadesDeSeleccion() {
    this.store.select(getModalidadesSeleccion).subscribe((modalidades: any) => {
      if (!modalidades) {
        this.store.dispatch(GetModalidadesSeleccion({}));
      }
    });
  }
}
