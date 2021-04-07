import { Action, createReducer, on } from '@ngrx/store';
import * as SeguridadSocialActions from '../actions/seguridad-social.actions';

export const seguridadSocialFeatureKey = 'seguridadSocial';

export interface State {
  DatosBanco: any;
  DatosInformacion: any;
  DatosRelacion: any;
  DatosRubros: any;
  DatosConceptos: any;
  DatosBeneficiarios: any;
}

export const initialState: State = {
  DatosBanco: null,
  DatosInformacion: null,
  DatosRelacion: null,
  DatosRubros: null,
  DatosConceptos: null,
  DatosBeneficiarios: null,
};

const seguridadSocialReducer = createReducer(
  initialState,

  on(SeguridadSocialActions.loadSeguridadSocials, state => state),
  on(SeguridadSocialActions.cargarDatosInformacion, (state, action) => ({
    ...state, DatosInformacion:  state.DatosInformacion = action
  })),
  on(SeguridadSocialActions.cargarDatosBeneficiarios, (state, action) => ({
    ...state, DatosBeneficiarios:  state.DatosBeneficiarios = action
  })),
  on(SeguridadSocialActions.cargarDatosRelacion, (state, action) => ({
    ...state, DatosRelacion:  state.DatosRelacion = action
  })),
  on(SeguridadSocialActions.cargarDatosBanco, (state, action) => ({
    ...state, DatosBanco:  state.DatosBanco = action
  })),
  on(SeguridadSocialActions.cargarDatosRubros, (state, action) => ({
    ...state, DatosRubros:  state.DatosRubros = action
  })),
  on(SeguridadSocialActions.cargarDatosConceptos, (state, action) => ({
    ...state, DatosConceptos:  state.DatosConceptos = action
  })),

);

export function reducer(state: State | undefined, action: Action) {
  return seguridadSocialReducer(state, action);
}
