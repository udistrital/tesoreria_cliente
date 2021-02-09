import { createAction, props } from '@ngrx/store';

export const loadEspecificacionesavances = createAction(
  '[Especificacionesavances] Load Especificacionsavances'
);

export const loadEspecificacionSelecionada = createAction(
  '[Especificacionesavances] Load Especificacion Seleccionado',
  props(),
);



