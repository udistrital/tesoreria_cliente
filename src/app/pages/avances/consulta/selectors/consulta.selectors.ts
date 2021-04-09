import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromConsulta from '../reducers/consulta.reducer';

export const selectConsultaState = createFeatureSelector<fromConsulta.State>(
  fromConsulta.consultaFeatureKey
);

export const getConsultaSeleccionada = createSelector(
    selectConsultaState,
  (state: fromConsulta.State) => state.ConsultaSeleccionada
);
