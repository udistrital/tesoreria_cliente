import { Action, createReducer, on } from '@ngrx/store';
import * as RegistrarinformacionActions from '../actions/registrarinformacion.actions';

export const registrarinformacionFeatureKey = 'registrarinformacion';

export interface State {
  tipoBusqueda: any;

}

export const initialState: State = {
  tipoBusqueda: null,

};

const registrarinformacionReducer = createReducer(
  initialState,

  on(RegistrarinformacionActions.loadRegistrarinformacion, state => state),
  on(RegistrarinformacionActions.loadTipoBusqueda, (state, action) => ({
    ...state, tipoBusqueda: state.tipoBusqueda = action
  })),

);

export function reducer(state: State | undefined, action: Action) {
  return registrarinformacionReducer(state, action);
}
