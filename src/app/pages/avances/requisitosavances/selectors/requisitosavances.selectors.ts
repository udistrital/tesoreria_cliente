import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRequisitosavances from '../reducers/requisitosavances.reducer';

export const selectRequisitosavancesState = createFeatureSelector<fromRequisitosavances.State>(
  fromRequisitosavances.requisitosavancesFeatureKey
);

export const getRequisitoSeleccionado = createSelector(
  selectRequisitosavancesState,
  (state: fromRequisitosavances.State) => state.requisitoAvanceSeleccionado
);
