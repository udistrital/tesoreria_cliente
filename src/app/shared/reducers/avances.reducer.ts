import { Action, createReducer, on } from '@ngrx/store';
import * as AvancesActions from '../actions/avances.actions';

export const avancesFeatureKey = 'avances';

export interface State {
  tiposAvances: any;
  normas: any;
}

export const initialState: State = {
  tiposAvances: null,
  normas: null,
};

const avancesReducer = createReducer(
  initialState,

  on(AvancesActions.loadAvancess, state => state),
  on(AvancesActions.cargarTiposAvances, (state, action) => ({
    ...state, tiposAvances: state.tiposAvances = action
  })),
  on(AvancesActions.cargarNormas, (state, action) => ({
    ...state, normas: state.normas = action
  })),

);

export function reducer(state: State | undefined, action: Action) {
  return avancesReducer(state, action);
}
