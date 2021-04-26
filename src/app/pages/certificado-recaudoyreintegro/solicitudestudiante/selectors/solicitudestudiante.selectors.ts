import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSolicitudestudiante from '../reducers/solicitudestudiante.reducer';

export const selectSolicitudestudianteState = createFeatureSelector<fromSolicitudestudiante.State>(
  fromSolicitudestudiante.solicitudestudianteFeatureKey
);

export const getSolicitudestudianteSeleccionado = createSelector(
  selectSolicitudestudianteState,
  (state: fromSolicitudestudiante.State) => state.SolicitudestudianteSeleccionado
);
