import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRegistrarinformacion from '../reducers/registrarinformacion.reducer';

export const selectRegistrarinformacionState = createFeatureSelector<fromRegistrarinformacion.State>(
  fromRegistrarinformacion.registrarinformacionFeatureKey
);

export const selectTipoBusqueda = createSelector(
  selectRegistrarinformacionState,
  (state: fromRegistrarinformacion.State) => state.tipoBusqueda
);
