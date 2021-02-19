import { createAction, props } from '@ngrx/store';

export const loadGirochequess = createAction(
  '[Girocheques] Load Girochequess'
);

export const loadGirochequessSuccess = createAction(
  '[Girocheques] Load Girochequess Success',
  props<{ data: any }>()
);

export const loadGirochequessFailure = createAction(
  '[Girocheques] Load Girochequess Failure',
  props<{ error: any }>()
);
