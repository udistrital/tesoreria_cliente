import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGirosnomina from '../reducers/girosnomina.reducer';

export const selectGirosnominaState = createFeatureSelector<fromGirosnomina.State>(
  fromGirosnomina.girosnominaFeatureKey
);

export const getDatosInformacion = createSelector(
  selectGirosnominaState,
  (state: fromGirosnomina.State) => state.DatosInformacion);

export const getDatosBeneficiarios = createSelector(
  selectGirosnominaState,
  (state: fromGirosnomina.State) => state.DatosBeneficiarios);

export const getDatosBanco = createSelector(
  selectGirosnominaState,
  (state: fromGirosnomina.State) => state.DatosBancoNomina);

export const getDatosRelacion = createSelector(
  selectGirosnominaState,
  (state: fromGirosnomina.State) => state.DatosRelacion);

export const getDatosTercero = createSelector(
  selectGirosnominaState,
  (state: fromGirosnomina.State) => state.DatosTercero);
