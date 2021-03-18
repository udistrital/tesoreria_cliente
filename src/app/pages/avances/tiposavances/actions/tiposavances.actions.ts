import { createAction, props } from '@ngrx/store';

export const loadTiposAvances = createAction(
  '[Tiposavances] Load TiposAvances',
  props(),
);

export const loadTiposAvancesSeleccionado = createAction(
  '[Tiposavances] Load TiposAvances Seleccionado',
  props(),
);
