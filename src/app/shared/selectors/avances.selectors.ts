import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAvances from '../reducers/avances.reducer';

export const selectAvancesState = createFeatureSelector<fromAvances.State>(
  fromAvances.avancesFeatureKey
);

export const seleccionarTiposAvances = createSelector(
  selectAvancesState,
  (state: fromAvances.State) => state.tiposAvances
);

export const seleccionarNormas = createSelector(
  selectAvancesState,
  (state: fromAvances.State) => state.normas
);