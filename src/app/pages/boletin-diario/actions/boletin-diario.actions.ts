import { createAction, props } from '@ngrx/store';

export const loadBoletinDiarios = createAction(
  '[BoletinDiario] Load BoletinDiarios'
);

export const cargarDatosInformacion = createAction(
  '[BoletinDiario] Cargar DatosInformacion',
  props(),
);



