import { createAction, props } from '@ngrx/store';

export const loadSeguridadSocials = createAction(
  '[SeguridadSocial] Load SeguridadSocials'
);

export const cargarDatosInformacion = createAction(
  '[SeguridadSocial] Cargar DatosInformacion',
  props(),
);

export const cargarDatosRelacion = createAction(
  '[SeguridadSocial] Cargar DatosRelacion',
  props(),
);

export const cargarDatosRubros = createAction(
  '[SeguridadSocial] Cargar DatosRubros',
  props(),
);

export const cargarDatosConceptos = createAction(
  '[SeguridadSocial] Cargar DatosConceptos',
  props(),
);

export const cargarDatosBeneficiarios = createAction(
  '[SeguridadSocial] Cargar DatosBeneficiarios',
  props(),
);

export const cargarDatosBanco = createAction(
  '[SeguridadSocial] Cargar DatosBanco',
  props(),
);
