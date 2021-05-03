import { createAction, props } from '@ngrx/store';

export const loadSolicitudestudiante = createAction(
  '[Solicitudestudiante] Load Solicitud estudiante'
);

export const loadSolicitudestudianteSeleccionado = createAction(
  '[Solicitudestudiante] Load Solicitudestudiante Seleccionado',
  props(),
);
