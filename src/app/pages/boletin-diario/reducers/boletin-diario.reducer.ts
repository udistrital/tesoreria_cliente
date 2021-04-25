import { Action, createReducer, on } from '@ngrx/store';
import * as BoletinDiarioActions from '../actions/boletin-diario.actions';

export const boletinDiarioFeatureKey = 'boletinDiario';

export interface State {
  DatosInformacion: any;
}

export const initialState: State = {
  DatosInformacion: null,
};

const boletinDiarioReducer = createReducer(
  initialState,

  on(BoletinDiarioActions.loadBoletinDiarios, state => state),
  on(BoletinDiarioActions.cargarDatosInformacion, (state, action) => ({
    ...state, DatosInformacion: state.DatosInformacion = action
  })),

);

export function reducer(state: State | undefined, action: Action) {
  return boletinDiarioReducer(state, action);
}
