import { Action, createReducer, on } from '@ngrx/store';
import * as TiposavancesActions from '../actions/tiposavances.actions';

export const tiposavancesFeatureKey = 'tiposavances';

export interface State {
  TiposavancesSeleccionado: any;
}

export const initialState: State = {
  TiposavancesSeleccionado: null,
};

const tiposavancesReducer = createReducer(
  initialState,

  on(TiposavancesActions.loadTiposAvances, state => state),
  on(TiposavancesActions.loadTiposAvancesSeleccionado, (state, action) => ({
    ...state, TiposavancesSeleccionado: state.TiposavancesSeleccionado = action
  })),

);

export function reducer(state: State | undefined, action: Action) {
  return tiposavancesReducer(state, action);
}