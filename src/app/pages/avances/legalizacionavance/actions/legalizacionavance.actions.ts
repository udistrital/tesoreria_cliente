import { createAction, props } from '@ngrx/store';

export const loadLegalizacionavances = createAction(
  '[Legalizacionavance] Load Legalizacionavances'
);

export const loadTipoLegalizacion = createAction(
  '[Legalizacionavance] Load Tipo Legalizacion',
  props()
);

export const cargarDatosResponsableLegalizacion = createAction(
  '[Legalizacionavance] Cargar datos de responsable y legalización',
  props()
);

export const cargarDatosLegalizacion = createAction(
  '[Legalizacionavance] Cargar datos de legalizacion',
  props()
);

export const cargarRegistrosLegalizacion = createAction(
  '[Legalizacionavance] Cargar datos de registros legalizacion',
  props()
);

export const cargarDatosRetenciones = createAction(
  '[Legalizacionavance] Cargar datos consolidado de retenciones',
  props()
);

export const cargarDatosPracticasAcademicas = createAction(
  '[Legalizacionavance] Cargar datos prácticas académicas',
  props()
);

export const cargarDatosEstudiantes = createAction(
  '[Legalizacionavance] Cargar datos estudiantes',
  props()
);

export const cargarDatosAnexos = createAction(
  '[Legalizacionavance] Cargar datos estudiantes',
  props()
);
