import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromIngresos from '../reducers/ingresos.reducer';

export const selectIngresosState = createFeatureSelector<fromIngresos.State>(
  fromIngresos.ingresosFeatureKey
);

export const getTipoIngreso = createSelector(
  selectIngresosState,
  (state: fromIngresos.State) => state.TipoIngreso);

export const getConsignaciones = createSelector(
  selectIngresosState,
  (state: fromIngresos.State) => state.Consignaciones);
