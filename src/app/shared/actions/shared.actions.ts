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

export const GetArbolCuentaContableDebito = createAction(
  '[Shared] Get Arbol Cuenta Contable Debito',
  props()
);

export const LoadArbolCuentaContableDebito = createAction(
  '[Shared] Load Arbol Cuenta Contable Debito',
  props()
);

export const GetArbolCuentaContableCredito = createAction(
  '[Shared] Get Arbol Cuenta Contable Credito',
  props()
);

export const LoadArbolCuentaContableCredito = createAction(
  '[Shared] Load Arbol Cuenta Contable Credito',
  props()
);

// Nodo Seleccionado

export const LoadNodoSeleccionado = createAction(
  '[Shared] Load Nodo Seleccionado',
  props()
);

export const LoadNodoSeleccionadoCuentaContableDebito = createAction(
  '[Shared] Load Nodo Seleccionado Cuenta Contable Debito',
  props()
);

export const LoadNodoSeleccionadoCuentaContableCredito = createAction(
  '[Shared] Load Nodo Seleccionado Cuenta Contable Credito',
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

export const cargarBancos = createAction(
  '[Shared] Cargar bancos al store',
  props()
);

export const obtenerBancos = createAction(
  '[Shared] Obtener bancos desde el back',
  props<{ id?: any, query?: any, limit?: number }> ()
);

export const obtenerIdSucursales = createAction(
  '[Shared] Obtener id para agregar sucursales',
  props<{ query?: any}> ()
);

export const cargarIdSucursales = createAction(
  '[Shared] Cargar id para agregar sucursales',
  props()
);

export const obtenerSucursales = createAction(
  '[Shared] Obtener sucursales de bancos del back',
  props<{ id?: any, query?: any, limit?: any }>()
);

export const cargarSucursales = createAction(
  '[Shared] Cargar Sucursales al store',
  props()
);

export const cargarDivisas = createAction(
  '[Shared] Cargar divisas al store',
  props()
);

export const obtenerDivisas = createAction(
  '[Shared] Obtener divisas desde el back',
  props<{query?: any, limit?: number}> ()
);

export const obtenerRecursos = createAction(
  '[Shared] Obtener recursos desde el back',
  props<{ codigo: any }>()
);

export const cargarRecursos = createAction(
  '[Shared] Cargar recursos al store',
  props()
);

export const cargarTipoCuenta = createAction(
  '[Shared] Cargar tipos de cuentas bancarias al store',
  props()
);

export const obtenerTipoCuenta = createAction(
  '[Shared] Obtener tipos de cuentas bancarias desde el back',
  props<{query?: any, limit?: number}> ()
);

export const obtenerCuentasBancarias = createAction(
  '[Shared] Obtener cuentas bancarias de bancos del back',
  props<{ id?: any, query?: any, limit?: any }>()
);

export const cargarCuentasBancarias = createAction(
  '[Shared] Cargar cuentas bancarias al store',
  props()
);

export const obtenerTipoContribuyente = createAction(
  '[Shared] Obtener tipo de contribuyente del back',
  props<{query?: any, limit?: any }>()
);

export const cargarTipoContribuyente = createAction(
  '[Shared] Cargar tipo de contribuyente al store',
  props()
);

export const obtenerTipoDocumento = createAction(
  '[Shared] Obtener tipo de documento del back',
  props<{query?: any, limit?: any }>()
);

export const cargarTipoDocumento = createAction(
  '[Shared] Cargar tipo de documento al store',
  props()
);

export const obtenerBancoByNit = createAction(
  '[Shared] Obtener banco por nit del back',
  props<{query?: any, limit?: any }>()
);

export const cargarBancoByNit = createAction(
  '[Shared] Cargar banco por nit al store',
  props()
);

export const obtenerInfoComplementaria = createAction(
  '[Shared] Obtener info complementaria del banco desde el back',
  props<{query?: any, limit?: any }>()
);

export const cargarInfoComplementaria = createAction(
  '[Shared] Cargar info complementaria del banco al store',
  props()
);

export const obtenerTipoTercero = createAction(
  '[Shared] Obtener info del tipo de tercero desde el back',
  props<{query?: any, limit?: any }>()
);

export const cargarTipoTercero = createAction(
  '[Shared] Cargar info del tipo tercero al store',
  props()
);

export const obtenerBancosMid = createAction(
  '[Shared] Obtener info complementaria del banco desde el mid',
  props<{query?: any, limit?: any }>()
);

export const cargarBancosMid = createAction(
  '[Shared] Cargar info complementaria del banco del mid al store',
  props()
);

export const obtenerConceptos = createAction(
  '[Shared] Obtener conceptos desde el crud de cuentas contables',
  props<{query?: any, limit?: any }>()
);

export const cargarConceptos = createAction(
  '[Shared] Cargar conceptos al store',
  props()
);

export const obtenerConcepto = createAction(
  '[Shared] Obtener un concepto desde el crud de cuentas contables',
  props<{query?: any, concepto?: any }>()
);

export const cargarConcepto = createAction(
  '[Shared] Cargar un concepto al store',
  props()
);

export const obtenerConceptosByCodigo = createAction(
  '[Shared] Obtener conceptos por codigo desde el crud de cuentas contables',
  props<{codigo?: any}>()
);

export const cargarConceptosByCodigo = createAction(
  '[Shared] Cargar conceptos por codigo al store',
  props()
);

export const obtenerRubro = createAction(
  '[Shared] Obtener rubro por codigo desde el crud de plan cuentas',
  props<{codRubro: any}>()
);

export const cargarRubro = createAction(
  '[Shared] Cargar rubro al store',
  props()
);

export const obtenerCuentaDebito = createAction(
  '[Shared] Obtener cuenta contable debito por codigo',
  props<{idCuentaContable: any}>()
);

export const cargarCuentaDebito = createAction(
  '[Shared] Cargar cuenta contable debito por codigo al store',
  props()
);

export const obtenerCuentaCredito = createAction(
  '[Shared] Obtener cuenta contable credito por codigo',
  props<{idCuentaContable: any}>()
);

export const cargarCuentaCredito = createAction(
  '[Shared] Cargar cuenta contable credito por codigo al store',
  props()
);

export const obtenerParametros = createAction(
  '[Shared] Obtener parametros del crud de parametros',
  props<{query?: any, limit?: any }>()
);

export const cargarParametros = createAction(
  '[Shared] Cargar parametros al store',
  props()
);

export const obtenerParametrosHijos = createAction(
  '[Shared] Obtener parametros hijos del crud de parametros',
  props<{query?: any, limit?: any }>()
);

export const cargarParametrosHijos = createAction(
  '[Shared] Cargar parametros hijos al store',
  props()
);

export const obtenerTipoDocumentos = createAction(
  '[Shared] Obtener tipos de docoumentos del crud de cuentas contables',
  props<{query?: any, limit?: any }>()
);

export const cargarTipoDocumentos = createAction(
  '[Shared] Cargar tipos de documentos al store',
  props()
);

export const SeleccionarRubro = createAction(
  '[Shared] Cargar rubros al store',
  props()
);

export const SeleccionarRubroVer = createAction(
  '[Shared] Cargar rubro al store cuando se va a ver o editar un concepto',
  props()
);

export const SeleccionarCuentaContable = createAction(
  '[Shared] Cargar cuentas contables al store',
  props()
);
