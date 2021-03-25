import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSeguridadSocial from '../reducers/seguridad-social.reducer';

export const selectSeguridadSocialState = createFeatureSelector<fromSeguridadSocial.State>(
  fromSeguridadSocial.seguridadSocialFeatureKey
);

export const getDatosBeneficiarios = createSelector(
  selectSeguridadSocialState,
  (state: fromSeguridadSocial.State) => state.DatosBeneficiarios);

export const getDatosInformacion = createSelector(
  selectSeguridadSocialState,
  (state: fromSeguridadSocial.State) => state.DatosInformacion);

export const getDatosConceptos = createSelector(
  selectSeguridadSocialState,
  (state: fromSeguridadSocial.State) => state.DatosConceptos);

export const getDatosRubros = createSelector(
  selectSeguridadSocialState,
  (state: fromSeguridadSocial.State) => state.DatosRubros);

export const getDatosRelacion = createSelector(
  selectSeguridadSocialState,
  (state: fromSeguridadSocial.State) => state.DatosRelacion);

export const getDatosBanco = createSelector(
  selectSeguridadSocialState,
  (state: fromSeguridadSocial.State) => state.DatosBanco);
