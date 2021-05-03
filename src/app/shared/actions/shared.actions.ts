import { createAction, props } from '@ngrx/store';

export const loadShareds = createAction(
  '[Shared] Load Shareds'
);

// Errores

export const CatchError = createAction(
  '[Shared] Catch Error',
  props<{}>()
);

// Acciones Arbol

export const GetArbolRubro = createAction(
  '[Shared] Get Arbol Rubro',
  props<{ branch: any }>()
);

export const LoadArbolRubro = createAction(
  '[Shared] Load Arbol Rubro',
  props()
);

// Nodo Seleccionado

export const LoadNodoSeleccionado = createAction(
  '[Shared] Load Nodo Seleccionado',
  props()
);

// Fila Seleccionado

export const LoadFilaSeleccionada = createAction(
  '[Shared] Load Fila Seleccionada',
  props()
);

// Accion General de Tabla

export const LoadAccionTabla = createAction(
  '[Shared] Load Accion Tabla',
  props()
);

// Acciones Vigencia

export const GetVigenciaActual = createAction(
  '[Shared] Get Vigencia Actual',
  props<{ offset: number }>()
);

export const LoadVigenciaActual = createAction(
  '[Shared] Load Vigencia Actual',
  props()
);

// Area Funcional

export const LoadAreaFuncional = createAction(
  '[Shared] Load Area Funcional',
  props()
);

// Centro Gestor

export const LoadCentroGestor = createAction(
  '[Shared] Load Centro Gestor',
  props()
);

// Modalidad de Seleccion

export const GetModalidadesSeleccion = createAction(
  '[Shared] Get Modalidad Seleccion',
  props()
);

export const LoadModalidadesSeleccion = createAction(
  '[Shared] Load Modalidad Seleccion',
  props()
);

// Vigencias

export const getVigencias = createAction(
  '[Shared] Get Vigencias'
);

export const loadVigencias = createAction(
  '[Shared] Load Vigencias',
  props()
);

// Tipos ID de terceros

export const getTiposID = createAction(
  '[Shared] Get Tipos Identificacion'
);

export const loadTiposID = createAction(
  '[Shared] Load Tipos Identificacion',
  props()
);

// Datos de ID de terceros

export const getDatosID = createAction(
  '[Shared] Get Datos Identificacion',
  props<{ clave: string, numero?: string, tipo?: number, limit?: number, fields?: string }>()
);

export const loadDatosID = createAction(
  '[Shared] Load Datos Identificacion',
  props<{ clave: string, datosId: any }>()
);

// Datos de proveedor

export const cargarDatosProvedor = createAction(
  '[Shared] Cargar datos proveedor al store',
  props()
);

export const obtenerDatosProvedor = createAction(
  '[Shared] Obtener datos proveedor desde el back',
  props<{ id?: any, query?: any }>()
);

// Teléfonos de proveedor

export const cargarTelefonosProvedores = createAction(
  '[Shared] Cargar telefonos proveedor al store',
  props()
);

export const obtenerTelefonosProvedores = createAction(
  '[Shared] Obtener telefonos proveedor desde el back',
  props<{ id?: any, query?: any }>()
);

// Ordenadores de gasto

export const cargarOdrenadores = createAction(
  '[Shared] Cargar ordenadores al store',
  props()
);

export const obtenerOrdenadores = createAction(
  '[Shared] Obtener ordenadores desde el back',
  props<{ id?: any, query?: any, limit?: number }>()
);

// Dependencias

export const cargarDependencias = createAction(
  '[Shared] Cargar dependencias al store',
  props()
);

export const obtenerDependencias = createAction(
  '[Shared] Obtener dependencias desde el back',
  props<{ id?: any, query?: any, limit?: number }>()
);

// Facultades y proyectos

export const cargarFacultadesProyectos = createAction(
  '[Shared] Cargar facultades y proyectos al store',
  props()
);

export const obtenerFacultadesProyectos = createAction(
  '[Shared] Obtener facultades y proyectos desde el back',
  props<{ id?: any, query?: any, limit?: number }>()
);
