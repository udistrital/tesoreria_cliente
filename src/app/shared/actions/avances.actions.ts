import { createAction, props } from '@ngrx/store';

export const loadAvancess = createAction(
  '[Avances] Load Avancess'
);

// Tipos de avances

export const cargarTiposAvances = createAction(
  '[Avances] Carga tipos de avances al store',
  props()
);

export const obtenerTiposAvances = createAction(
  '[Avances] Obtener tipos de avances del back',
  props<{ id?: any, query?: any }>()
);

export const crearTipoAvance = createAction(
  '[Avances] Crear y guardar un nuevo tipo de avance en back',
  props<{ element: any }>()
);

export const actualizarTipoAvance = createAction(
  '[Avances] Actualizar y guardar un tipo de avance existente en back',
  props<{ id: any, element: any }>()
);

export const eliminarTipoAvance = createAction(
  '[Avances] Eliminar un tipo de avance existente en back',
  props<{ id: any }>()
);

// Normas

export const cargarNormas = createAction(
  '[Avances] Carga normas al store',
  props()
);

export const obtenerNormas = createAction(
  '[Avances] Obtener normas del back',
  props<{ id?: any, query?: any }>()
);

export const crearNorma = createAction(
  '[Avances] Crear y guardar una nueva norma en back',
  props<{ element: any }>()
);

export const actualizarNorma = createAction(
  '[Avances] Actualizar y guardar una norma existente en back',
  props<{ id: any, element: any }>()
);

export const eliminarNorma = createAction(
  '[Avances] Eliminar una norma existente en back',
  props<{ id: any }>()
);

// Requisitos

export const cargarRequisitos = createAction(
  '[Avances] Carga requisitos al store',
  props()
);

export const obtenerRequisitos = createAction(
  '[Avances] Obtener requisitos del back',
  props<{ id?: any, query?: any }>()
);

export const crearRequisito = createAction(
  '[Avances] Crear y guardar un nuevo requisito en back',
  props<{ element: any }>()
);

export const actualizarRequisito = createAction(
  '[Avances] Actualizar y guardar un requisito existente en back',
  props<{ id: any, element: any }>()
);

// Asociación requisito tipo avance

export const cargarRequisitoTipoAvances = createAction(
  '[Avances] Carga asociaciones de requisitos con tipos de avance al store',
  props()
);

export const obtenerRequisitoTipoAvances = createAction(
  '[Avances] Obtener asociaciones de requisitos con tipos de avance del back',
  props<{ id?: any, query?: any, idTipoAvance?: number }>()
);

export const asociarRequisitoTipoAvance = createAction(
  '[Avances] Crear y guardar una asociacion de requisito con tipo avance en back',
  props<{ element: any }>()
);

export const desasociarRequisitoTipoAvance = createAction(
  '[Avances] Eliminar una asociacion de requisito con tipo avance existente en back',
  props<{ id: any }>()
)
// Especificaciones

export const cargarEspecificaciones = createAction(
  '[Avances] Carga especificaciones al store',
  props()
);

export const obtenerEspecificaciones = createAction(
  '[Avances] Obtener especificaciones del back',
  props<{ id?: any, query?: any }>()
);

export const crearEspecificacion = createAction(
  '[Avances] Crear y guardar una nueva especificacion en back',
  props<{ element: any }>()
);

export const actualizarEspecificacion = createAction(
  '[Avances] Actualizar y guardar una especificacion existente en back',
  props<{ id: any, element: any }>()
);
