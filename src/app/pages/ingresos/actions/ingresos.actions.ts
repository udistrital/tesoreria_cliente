import { createAction, props } from '@ngrx/store';

export const loadIngresoss = createAction(
  '[Ingresos] Load Ingresoss'
);

export const cargarTipoIngreso = createAction(
  '[Ingresos] Cargar TipoIngreso',
  props(),
);




