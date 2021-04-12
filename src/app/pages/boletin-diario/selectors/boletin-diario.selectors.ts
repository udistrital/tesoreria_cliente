import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBoletinDiario from '../reducers/boletin-diario.reducer';

export const selectBoletinDiarioState = createFeatureSelector<fromBoletinDiario.State>(
  fromBoletinDiario.boletinDiarioFeatureKey
);
