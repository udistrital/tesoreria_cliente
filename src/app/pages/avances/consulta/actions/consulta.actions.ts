import { createAction, props } from '@ngrx/store';

export const loadConsulta = createAction(
  '[Consulta] Load Consultas de Avances',
  props(),
);

export const loadConsultaSeleccionada = createAction(
  '[Consulta] Load Consultas Seleccionadas',
  props(),
);
