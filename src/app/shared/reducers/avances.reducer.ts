import { Action, createReducer, on } from '@ngrx/store';
import * as AvancesActions from '../actions/avances.actions';

export const avancesFeatureKey = 'avances';

export interface State {
  tiposAvances: any;
  normas: any;
  requisitos: any;
}

export const initialState: State = {
  tiposAvances: null,
  normas: null,
  requisitos: null,
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
  on(AvancesActions.cargarRequisitos, (state, action) => ({
    ...state, requisitos: state.requisitos = action
  })),

);

export function reducer(state: State | undefined, action: Action) {
  return avancesReducer(state, action);
}
