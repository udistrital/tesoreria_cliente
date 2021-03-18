import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGirocheques from '../reducers/girocheques.reducer';

export const selectGirochequesState = createFeatureSelector<fromGirocheques.State>(
  fromGirocheques.girochequesFeatureKey
);

export const getDatosDetalle = createSelector (
  selectGirochequesState,
  (state: fromGirocheques.State) => state.DatosDetalle);

export const getDatosContabilizacion = createSelector (
  selectGirochequesState,
  (state: fromGirocheques.State) => state.DatosContabilizacion);

export const getDatosErogacion = createSelector (
  selectGirochequesState,
  (state: fromGirocheques.State) => state.DatosErogacion);

export const getTablaContabilizacion = createSelector (
  selectGirochequesState,
  (state: fromGirocheques.State) => state.TablaContabilizacion);

