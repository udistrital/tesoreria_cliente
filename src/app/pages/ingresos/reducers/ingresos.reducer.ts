import { Action, createReducer, on } from '@ngrx/store';
import * as IngresosActions from '../actions/ingresos.actions';

export const ingresosFeatureKey = 'ingresos';
export interface State {
  TipoIngreso: any;
  Consignaciones: any;
}

export const initialState: State = {
  TipoIngreso: null,
  Consignaciones: null,
};

const ingresosReducer = createReducer(
  initialState,

  on(IngresosActions.loadIngresoss, (state) => state),
  on(IngresosActions.cargarTipoIngreso, (state, action) => ({
    ...state,
    TipoIngreso: (state.TipoIngreso = action),
  })),
  on(IngresosActions.cargarConsignaciones, (state, action) => ({
    ...state,
    Consignaciones: (state.Consignaciones = action),
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return ingresosReducer(state, action);
}
