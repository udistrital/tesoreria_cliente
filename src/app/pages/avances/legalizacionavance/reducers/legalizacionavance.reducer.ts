import { Action, createReducer, on } from '@ngrx/store';
import * as LegalizacionavanceActions from '../actions/legalizacionavance.actions';

export const legalizacionavanceFeatureKey = 'legalizacionavance';

export interface State {
  tipoLegalizacion: any;
  datosResponsable: any;
  datosLegalizacion: any;
  registrosLegalizacion: any;
  datosRetenciones: any;
  datosPracticasAcademicas: any;
  datosEsdudiantes: any;
  datosAnexos: any;
}

export const initialState: State = {
  tipoLegalizacion: null,
  datosResponsable: null,
  datosLegalizacion: null,
  registrosLegalizacion: [],
  datosRetenciones: [],
  datosPracticasAcademicas: null,
  datosEsdudiantes: [],
  datosAnexos: [],
};

const legalizacionavanceReducer = createReducer(
  initialState,

  on(LegalizacionavanceActions.loadLegalizacionavances, state => state),
  on(LegalizacionavanceActions.loadTipoLegalizacion, (state, action) => ({
    ...state, tipoLegalizacion: state.tipoLegalizacion = action
  })),
  on(LegalizacionavanceActions.cargarDatosResponsableLegalizacion, (state, action) => ({
    ...state, datosResponsable: state.datosResponsable = action
  })),
  on(LegalizacionavanceActions.cargarDatosLegalizacion, (state, action) => ({
    ...state, datosLegalizacion: state.datosLegalizacion = action
  })),
  on(LegalizacionavanceActions.cargarRegistrosLegalizacion, (state, action) => ({
    ...state, registrosLegalizacion: state.registrosLegalizacion = action
  })),
  on(LegalizacionavanceActions.cargarDatosRetenciones, (state, action) => ({
    ...state, datosRetenciones: state.datosRetenciones = action
  })),
  on(LegalizacionavanceActions.cargarDatosPracticasAcademicas, (state, action) => ({
    ...state, datosPracticasAcademicas: state.datosPracticasAcademicas = action
  })),
  on(LegalizacionavanceActions.cargarDatosEstudiantes, (state, action) => ({
    ...state, datosEsdudiantes: state.datosEsdudiantes = action
  })),
  on(LegalizacionavanceActions.cargarDatosAnexos, (state, action) => ({
    ...state, datosAnexos: state.datosAnexos = action
  })),

);

export function reducer(state: State | undefined, action: Action) {
  return legalizacionavanceReducer(state, action);
}
