import { createAction, props } from '@ngrx/store';

export const loadGirochequess = createAction(
  '[Girocheques] Load Girochequess'
);

export const cargarDatosDetalle = createAction(
  '[GiroCheques] Cargar DatosDetalle',
  props(),
);

export const cargarDatosErogacion = createAction(
  '[GiroCheques] Cargar DatosErogacion',
  props(),
);

export const cargarDatosContabilizacion = createAction(
  '[GiroCheques] Cargar DatosContabilizacion',
  props(),
);

export const cargarTablaContabilizacion = createAction(
  '[GiroCheques] Cargar TablaContabilizacion',
  props(),
);
