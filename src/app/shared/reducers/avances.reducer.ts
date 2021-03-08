import { Action, createReducer, on } from '@ngrx/store';
import * as AvancesActions from '../actions/avances.actions';

export const avancesFeatureKey = 'avances';

export interface State {
  tiposAvances: any;
  normas: any;
  requisitos: any;
  requisitosTipoAvances: any;
  especificaciones: any;
}

export const initialState: State = {
  tiposAvances: null,
  normas: null,
  requisitos: null,
  requisitosTipoAvances: null,
  especificaciones: null,
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
  on(AvancesActions.cargarRequisitoTipoAvances, (state, action) => ({
    ...state, requisitosTipoAvances: state.requisitosTipoAvances = action
  })),
  on(AvancesActions.cargarEspecificaciones, (state, action) => ({
    ...state, especificaciones: state.especificaciones = action
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return avancesReducer(state, action);
}
