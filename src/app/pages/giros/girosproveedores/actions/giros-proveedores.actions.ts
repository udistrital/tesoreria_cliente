import { createAction, props } from '@ngrx/store';

export const loadGirosProveedoress = createAction(
  '[GirosProveedores] Load GirosProveedoress'
);

export const loadGirosProveedoressSuccess = createAction(
  '[GirosProveedores] Load GirosProveedoress Success',
  props<{ data: any }>()
);

export const loadGirosProveedoressFailure = createAction(
  '[GirosProveedores] Load GirosProveedoress Failure',
  props<{ error: any }>()
);
