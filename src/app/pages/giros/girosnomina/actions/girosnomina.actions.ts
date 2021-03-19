import { createAction, props } from '@ngrx/store';

export const loadGirosnominas = createAction(
  '[Girosnomina] Load Girosnominas'
);

export const cargarDatosInformacion = createAction(
  '[Girosnomina] Cargar DatosInformacion',
  props(),
);

export const cargarDatosRelacion = createAction(
  '[Girosnomina] Cargar DatosRelacion',
  props(),
);

export const cargarDatosBeneficiarios = createAction(
  '[Girosnomina] Cargar DatosBeneficiarios',
  props(),
);

export const cargarDatosBancoNomina = createAction(
  '[Girosnomina] Cargar DatosBancoProveedores',
  props(),
);
