import { Action, createReducer, on } from '@ngrx/store';
import * as EspecificacionesavancesActions from '../actions/especificacionesavances.actions';

export const especificacionesavancesFeatureKey = 'especificacionesavances';

export interface State {
  especificacionAvanceSeleccionada: any;
}

export const initialState: State = {
  especificacionAvanceSeleccionada: null,
};

const especificacionesavancesReducer = createReducer(
  initialState,

  on(EspecificacionesavancesActions.loadEspecificacionesavances, state => state),
  on(EspecificacionesavancesActions.loadEspecificacionSelecionada, (state, action) => ({
    ...state, especificacionAvanceSeleccionada: state.especificacionAvanceSeleccionada = action
  })),

);

export function reducer(state: State | undefined, action: Action) {
  return especificacionesavancesReducer(state, action);
}
