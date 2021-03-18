import { createAction, props } from '@ngrx/store';

export const loadRequisitosavances = createAction(
  '[Requisitosavances] Load Requisitosavances'
);

export const loadRequisitoSelecionado = createAction(
  '[Requisitosavances] Load Requisito Seleccionado',
  props(),
);



