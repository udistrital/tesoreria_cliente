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
  props<{ id?: any }>()
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
  props<{ id: any, element: any }>()
);
