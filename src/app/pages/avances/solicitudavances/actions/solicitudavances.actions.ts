import { createAction, props } from '@ngrx/store';

export const loadSolicitudavances = createAction(
  '[SolicitudAvances] Load SolicitudAvances'
);

export const loadAdjuntarRequisitos = createAction(
  '[SolicitudAvances] Load AdjuntarRequisitos',
  props(),
);
