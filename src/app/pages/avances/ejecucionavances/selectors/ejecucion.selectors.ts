import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEjecucion from '../reducers/ejecucion.reducer';

export const selectEjecucionState = createFeatureSelector<fromEjecucion.State>(
  fromEjecucion.ejecucionFeatureKey
);
