import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGirocheques from '../reducers/girocheques.reducer';

export const selectGirochequesState = createFeatureSelector<fromGirocheques.State>(
  fromGirocheques.girochequesFeatureKey
);
