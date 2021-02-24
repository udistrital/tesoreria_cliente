import { createAction, props } from '@ngrx/store';

export const loadEjecucions = createAction(
  '[Ejecucion] Load Ejecucions'
);

export const loadEjecucionsSuccess = createAction(
  '[Ejecucion] Load Ejecucions Success',
  props<{ data: any }>()
);

export const loadEjecucionsFailure = createAction(
  '[Ejecucion] Load Ejecucions Failure',
  props<{ error: any }>()
);
