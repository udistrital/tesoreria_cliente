import { createAction, props } from '@ngrx/store';

export const loadLegalizacionavances = createAction(
  '[Legalizacionavance] Load Legalizacionavances'
);

export const loadTipoLegalizacion = createAction(
  '[Legalizacionavance] Load Tipo Legalizacion',
  props()
);


