import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGirosProveedores from '../reducers/giros-proveedores.reducer';

export const selectGirosProveedoresState = createFeatureSelector<fromGirosProveedores.State>(
  fromGirosProveedores.girosProveedoresFeatureKey
);
