import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGirosProveedores from '../reducers/giros-proveedores.reducer';

export const selectGirosProveedoresState = createFeatureSelector<fromGirosProveedores.State>(
  fromGirosProveedores.girosProveedoresFeatureKey
);

export const getDatosInformacion = createSelector(
  selectGirosProveedoresState,
  (state: fromGirosProveedores.State) => state.DatosInformacion);

export const getDatosOrdenPago = createSelector(
  selectGirosProveedoresState,
  (state: fromGirosProveedores.State) => state.DatosOrdenPago);

export const getDatosOrdenesPago = createSelector(
  selectGirosProveedoresState,
  (state: fromGirosProveedores.State) => state.DatosOrdenesPago);

export const getDatosBeneficiarios = createSelector(
  selectGirosProveedoresState,
  (state: fromGirosProveedores.State) => state.DatosBeneficiarios);
