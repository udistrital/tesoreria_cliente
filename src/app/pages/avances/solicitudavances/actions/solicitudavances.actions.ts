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

export const cargarInfoFuncionario = createAction(
  '[Shared] Cargar información de funcionario al store',
  props()
);

export const cargarDescripcionSolicitud = createAction(
  '[Shared] Cargar descripción de la solicitud al store',
  props()
);

export const cargarTiposdeAvances = createAction(
  '[Shared] Cargar tipos de avances al store',
  props()
);
