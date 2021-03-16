import { createAction, props } from '@ngrx/store';

export const loadGirosProveedoress = createAction(
  '[GirosProveedores] Load GirosProveedoress'
);

export const cargarDatosInformacion = createAction(
  '[GirosProveedores] Cargar DatosInformacion',
  props(),
);

export const cargarDatosOrdenPago = createAction(
  '[GirosProveedores] Cargar DatosOrdenPago',
  props(),
);

export const cargarDatosOrdenesPago = createAction(
  '[GirosProveedores] Cargar DatosOrdenesPago',
  props(),
);

export const cargarDatosBeneficiarios = createAction(
  '[GirosProveedores] Cargar DatosBeneficiarios',
  props(),
);

