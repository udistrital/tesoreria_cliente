import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLegalizacionavance from '../reducers/legalizacionavance.reducer';

export const selectLegalizacionavanceState = createFeatureSelector<fromLegalizacionavance.State>(
  fromLegalizacionavance.legalizacionavanceFeatureKey
);

export const selectTipoLegalizacion = createSelector(
  selectLegalizacionavanceState,
  (state: fromLegalizacionavance.State) => state.tipoLegalizacion
);
