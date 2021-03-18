import { createAction, props } from '@ngrx/store';

export const loadSolicitudavances = createAction(
  '[SolicitudAvances] Load SolicitudAvances'
);

export const loadAdjuntarRequisitos = createAction(
  '[SolicitudAvances] Load AdjuntarRequisitos',
  props(),
);

// Solicitudes de avance

export const cargarSolicitudesAvance = createAction(
  '[Avances] Carga las solicitudes de avance al store',
  props()
);

export const obtenerSolicitudesAvance = createAction(
  '[Avances] Obtener solicitudes de avances del back',
  props<{ id?: any, query?: any }>()
);

export const crearSolicitudAvance = createAction(
  '[Avances] Crear y guardar una nueva solicitud de avance en back',
  props<{ element: any }>()
);

export const actualizarSolicitudAvance = createAction(
  '[Avances] Actualizar y guardar una solicitud de avance existente en back',
  props<{ id: any, element: any }>()
);
