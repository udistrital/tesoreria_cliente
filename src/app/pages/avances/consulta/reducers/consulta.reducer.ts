import { Action, createReducer, on } from '@ngrx/store';
import * as ConsultaActions from '../actions/consulta.actions';

export const consultaFeatureKey = 'consulta';

export interface State {
  ConsultaSeleccionada: any;
}

export const initialState: State = {
  ConsultaSeleccionada: null,
};

const consultaReducer = createReducer(
  initialState,

  on(ConsultaActions.loadConsulta, state => state),
  on(ConsultaActions.loadConsultaSeleccionada, (state, action) => ({
    ...state, ConsultaSeleccionada: state.ConsultaSeleccionada = action
  })),

);

export function reducer(state: State | undefined, action: Action) {
  return consultaReducer(state, action);
}
