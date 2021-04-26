import { createAction, props } from '@ngrx/store';

export const loadRegistrarinformacion = createAction(
  '[Registrarinformacion] Load Registrarinformacion'
);

export const loadTipoBusqueda = createAction(
  '[Registrarinformacion] Load TipoBusqueda',
  props()
);
