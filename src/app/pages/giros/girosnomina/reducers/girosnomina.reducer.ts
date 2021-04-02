import { Action, createReducer, on } from '@ngrx/store';
import * as GirosnominaActions from '../actions/girosnomina.actions';

export const girosnominaFeatureKey = 'girosnomina';

export interface State {
  DatosInformacion: any;
  DatosRelacion: any;
  DatosBeneficiarios: any;
  DatosBancoNomina: any;
  DatosTercero: any;
}

export const initialState: State = {
  DatosInformacion: null,
  DatosRelacion: null,
  DatosBeneficiarios: null,
  DatosBancoNomina: null,
  DatosTercero: null
};

const girosnominaReducer = createReducer(
  initialState,

  on(GirosnominaActions.loadGirosnominas, state => state),
  on(GirosnominaActions.cargarDatosInformacion, (state, action) => ({
    ...state, DatosInformacion: state.DatosInformacion = action
  })),
  on(GirosnominaActions.cargarDatosBeneficiarios, (state, action) => ({
    ...state, DatosBeneficiarios: state.DatosBeneficiarios = action
  })),
  on(GirosnominaActions.cargarDatosBancoNomina, (state, action) => ({
    ...state, DatosBancoNomina: state.DatosBancoNomina = action
  })),
  on(GirosnominaActions.cargarDatosRelacion, (state, action) => ({
    ...state, DatosRelacion: state.DatosRelacion = action
  })),
  on(GirosnominaActions.cargarDatosTercero, (state, action) => ({
    ...state, DatosTercero: state.DatosTercero = action
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return girosnominaReducer(state, action);
}
