import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBoletinDiario from '../reducers/boletin-diario.reducer';

export const selectBoletinDiarioState = createFeatureSelector<fromBoletinDiario.State>(
  fromBoletinDiario.boletinDiarioFeatureKey
);

export const getDatosInformacion = createSelector(
  selectBoletinDiarioState,
  (state: fromBoletinDiario.State) => state.DatosInformacion);
