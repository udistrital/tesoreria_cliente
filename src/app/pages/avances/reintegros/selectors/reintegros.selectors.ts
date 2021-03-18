import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReintegros from '../reducers/reintegros.reducer';

export const ReintegrosState = createFeatureSelector<fromReintegros.State>(
    fromReintegros.reintegrosFeatureKey
);
