import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAdquisicion from '../reducers/adquisicion.reducer';

export const selectAdquisicionState = createFeatureSelector<fromAdquisicion.State>(
    fromAdquisicion.adquisicionFeatureKey
);

export const getInversioninicial = createSelector(
    selectAdquisicionState,
    (state: fromAdquisicion.State) => state.Inversioninicial
);
