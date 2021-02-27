import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLegalizacionavance from '../reducers/legalizacionavance.reducer';

export const selectLegalizacionavanceState = createFeatureSelector<fromLegalizacionavance.State>(
  fromLegalizacionavance.legalizacionavanceFeatureKey
);

export const selectTipoLegalizacion = createSelector(
  selectLegalizacionavanceState,
  (state: fromLegalizacionavance.State) => state.tipoLegalizacion
);

export const seleccionarDatosResponsable = createSelector(
  selectLegalizacionavanceState,
  (state: fromLegalizacionavance.State) => state.datosResponsable
);

export const seleccionarDatosLegalizacion = createSelector(
  selectLegalizacionavanceState,
  (state: fromLegalizacionavance.State) => state.datosLegalizacion
);

export const seleccionarRegistrosLegalizacion = createSelector(
  selectLegalizacionavanceState,
  (state: fromLegalizacionavance.State) => state.registrosLegalizacion
);

export const seleccionarDatosRetenciones = createSelector(
  selectLegalizacionavanceState,
  (state: fromLegalizacionavance.State) => state.datosRetenciones
);

export const seleccionarPracticasAcademicas = createSelector(
  selectLegalizacionavanceState,
  (state: fromLegalizacionavance.State) => state.datosPracticasAcademicas
);

export const seleccionarDatosEstudiantes = createSelector(
  selectLegalizacionavanceState,
  (state: fromLegalizacionavance.State) => state.datosEsdudiantes
);

export const seleccionarDatosAnexos = createSelector(
  selectLegalizacionavanceState,
  (state: fromLegalizacionavance.State) => state.datosAnexos
);
