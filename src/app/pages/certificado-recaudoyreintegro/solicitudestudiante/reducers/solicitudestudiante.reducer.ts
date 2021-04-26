import { Action, createReducer, on } from '@ngrx/store';
import * as SolicitudestudianteActions from '../actions/solicitudestudiante.actions';

export const solicitudestudianteFeatureKey = 'solicitudestudiante';

export interface State {
    SolicitudestudianteSeleccionado: any;
}

export const initialState: State = {
    SolicitudestudianteSeleccionado: null,
};

const SolicitudestudianteReducer = createReducer(
  initialState,

  on(SolicitudestudianteActions.loadSolicitudestudiante, state => state),
  on(SolicitudestudianteActions.loadSolicitudestudiante, (state, action) => ({
    ...state, SolicitudestudianteSeleccionado: state.SolicitudestudianteSeleccionado = action
  })),

);

export function reducer(state: State | undefined, action: Action) {
  return SolicitudestudianteReducer(state, action);
}
