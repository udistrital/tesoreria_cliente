import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTiposavances from '../reducers/tiposavances.reducer';

export const selectTiposavancesState = createFeatureSelector<fromTiposavances.State>(
  fromTiposavances.tiposavancesFeatureKey
);

export const getTiposavancesSeleccionado = createSelector(
    selectTiposavancesState,
  (state: fromTiposavances.State) => state.TiposavancesSeleccionado
);
