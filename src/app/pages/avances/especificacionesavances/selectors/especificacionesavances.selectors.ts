import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEspecificacionesavances from '../reducers/especificacionesavances.reducer';

export const selectEspecificacionesavancesState = createFeatureSelector<fromEspecificacionesavances.State>(
  fromEspecificacionesavances.especificacionesavancesFeatureKey
);

export const getEspecificacionSeleccionada = createSelector(
  selectEspecificacionesavancesState,
  (state: fromEspecificacionesavances.State) => state.especificacionAvanceSeleccionada
);
