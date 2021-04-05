import { createAction, props } from '@ngrx/store';

export const loadAdquisicion = createAction(
  '[Adquisicion] Load Adquisicion de Inversion'
);

export const loadInversioninicial = createAction(
  '[Adquisicion] Load Inversion Inicial Afectacion',
  props(),
);
