import { Action, createReducer, on } from '@ngrx/store';
import * as SharedActions from '../actions/shared.actions';

export const sharedFeatureKey = 'shared';

export interface State {
  ArbolRubro: any;
  ArbolCuentaContableDebito: any;
  ArbolCuentaContableCredito: any;
  NodoSeleccionado: any;
  NodoSeleccionadoCuentaContableDebito: any;
  NodoSeleccionadoCuentaContableCredito: any;
  FilaSeleccionada: any;
  AccionTabla: any;
  VigenciaActual: any;
  AreaFuncional: any;
  CentroGestor: any;
  ModalidadesSeleccion: any;
  Vigencias: any;
  TiposID: any;
  DatosID: any;
  Proveedores: any;
  TelefonosProveedores: any;
  Ordenadores: any;
  Dependencias: any;
  FacultadesProyectos: any;
  Bancos: any;
  IdSucursales: any;
  Sucursales: any;
  Divisas: any;
  Recursos: any;
  TipoCuentas: any;
  CuentasBancarias: any;
  TipoContribuyente: any;
  TipoDocumento: any;
  BancoByNit: any;
  InfoComplementaria: any;
  BancosMid: any;
  TipoTercero: any;
  Conceptos: any;
  Concepto: any;
  Parametros: any;
  ParametrosHijos: any;
  TipoComprobante: any;
  RubroSeleccionado: any;
  Rubro: any;
  CuentaContableSeleccionada: any;
  CuentaDebito: any;
  CuentaCredito: any;
}

export const initialState: State = {
  ArbolRubro: [],
  ArbolCuentaContableDebito: [],
  ArbolCuentaContableCredito: [],
  NodoSeleccionado: null,
  NodoSeleccionadoCuentaContableDebito: null,
  NodoSeleccionadoCuentaContableCredito: null,
  FilaSeleccionada: null,
  AccionTabla: null,
  VigenciaActual: null,
  AreaFuncional: null,
  CentroGestor: null,
  ModalidadesSeleccion: null,
  Vigencias: null,
  TiposID: null,
  DatosID: {},
  Proveedores: null,
  TelefonosProveedores: null,
  Ordenadores: null,
  Dependencias: null,
  FacultadesProyectos: null,
  Bancos: null,
  IdSucursales: null,
  Sucursales: null,
  Divisas: null,
  Recursos: null,
  TipoCuentas: null,
  CuentasBancarias: null,
  TipoContribuyente: null,
  TipoDocumento: null,
  BancoByNit: null,
  InfoComplementaria: null,
  BancosMid: null,
  TipoTercero: null,
  Conceptos: null,
  Concepto: null,
  Parametros: null,
  ParametrosHijos: null,
  TipoComprobante: null,
  RubroSeleccionado: null,
  Rubro: null,
  CuentaContableSeleccionada: null,
  CuentaDebito: null,
  CuentaCredito: null,
};

const sharedReducer = createReducer(
  initialState,

  on(SharedActions.loadShareds, state => state),
  on(SharedActions.LoadArbolRubro, (state, action) => ({
    ...state, ArbolRubro: state.ArbolRubro = action
  })),
  on(SharedActions.LoadArbolCuentaContableDebito, (state, action) => ({
    ...state, ArbolCuentaContableDebito: state.ArbolCuentaContableDebito = action
  })),
  on(SharedActions.LoadArbolCuentaContableCredito, (state, action) => ({
    ...state, ArbolCuentaContableCredito: state.ArbolCuentaContableCredito = action
  })),
  on(SharedActions.LoadNodoSeleccionado, (state, action) => ({
    ...state, NodoSeleccionado: state.NodoSeleccionado = action
  })),
  on(SharedActions.LoadNodoSeleccionadoCuentaContableDebito, (state, action) => ({
    ...state, NodoSeleccionadoCuentaContableDebito: state.NodoSeleccionadoCuentaContableDebito = action
  })),
  on(SharedActions.LoadNodoSeleccionadoCuentaContableCredito, (state, action) => ({
    ...state, NodoSeleccionadoCuentaContableCredito: state.NodoSeleccionadoCuentaContableCredito = action
  })),
  on(SharedActions.LoadFilaSeleccionada, (state, action) => ({
    ...state, FilaSeleccionada: state.FilaSeleccionada = action
  })),
  on(SharedActions.LoadAccionTabla, (state, action) => ({
    ...state, AccionTabla: state.AccionTabla = action
  })),
  on(SharedActions.LoadVigenciaActual, (state, action) => ({
    ...state, VigenciaActual: state.VigenciaActual = action
  })),
  on(SharedActions.LoadAreaFuncional, (state, action) => ({
    ...state, AreaFuncional: state.AreaFuncional = action
  })),
  on(SharedActions.LoadCentroGestor, (state, action) => ({
    ...state, CentroGestor: state.CentroGestor = action
  })),
  on(SharedActions.LoadModalidadesSeleccion, (state, action) => ({
    ...state, ModalidadesSeleccion: state.ModalidadesSeleccion = action
  })),
  on(SharedActions.loadVigencias, (state, action) => ({
    ...state, Vigencias: state.Vigencias = action
  })),
  on(SharedActions.loadTiposID, (state, action) => ({
    ...state, TiposID: state.TiposID = action
  })),
  on(SharedActions.loadDatosID, (state, action) => {
    state.DatosID[action.clave] = action;
    return ({
      ...state, DatosID: state.DatosID = Object.assign({}, state.DatosID)
    });
  }),
  on(SharedActions.cargarDatosProvedor, (state, action) => ({
    ...state, Proveedores: state.Proveedores = action
  })),
  on(SharedActions.cargarTelefonosProvedores, (state, action) => ({
    ...state, TelefonosProveedores: state.TelefonosProveedores = action
  })),
  on(SharedActions.cargarOdrenadores, (state, action) => ({
    ...state, Ordenadores: state.Ordenadores = action
  })),
  on(SharedActions.cargarDependencias, (state, action) => ({
    ...state, Dependencias: state.Dependencias = action
  })),
  on(SharedActions.cargarFacultadesProyectos, (state, action) => ({
    ...state, FacultadesProyectos: state.FacultadesProyectos = action
  })),
  on(SharedActions.cargarBancos, (state, action) => ({
    ...state, Bancos: state.Bancos = action
  })),
  on(SharedActions.cargarIdSucursales, (state, action) => ({
    ...state, IdSucursales: state.IdSucursales = action
  })),
  on(SharedActions.cargarSucursales, (state, action) => ({
    ...state, Sucursales: state.Sucursales = action
  })),
  on(SharedActions.cargarDivisas, (state, action) => ({
    ...state, Divisas: state.Divisas = action
  })),
  on(SharedActions.cargarRecursos, (state, action) => ({
    ...state, Recursos: state.Recursos = action
  })),
  on(SharedActions.cargarTipoCuenta, (state, action) => ({
    ...state, TipoCuentas: state.TipoCuentas = action
  })),
  on(SharedActions.cargarCuentasBancarias, (state, action) => ({
    ...state, CuentasBancarias: state.CuentasBancarias = action
  })),
  on(SharedActions.cargarTipoContribuyente, (state, action) => ({
    ...state, TipoContribuyente: state.TipoContribuyente = action
  })),
  on(SharedActions.cargarTipoDocumento, (state, action) => ({
    ...state, TipoDocumento: state.TipoDocumento = action
  })),
  on(SharedActions.cargarBancoByNit, (state, action) => ({
    ...state, BancoByNit: state.BancoByNit = action
  })),
  on(SharedActions.cargarInfoComplementaria, (state, action) => ({
    ...state, InfoComplementaria: state.InfoComplementaria = action
  })),
  on(SharedActions.cargarBancosMid, (state, action) => ({
    ...state, BancosMid: state.BancosMid = action
  })),
  on(SharedActions.cargarTipoTercero, (state, action) => ({
    ...state, TipoTercero: state.TipoTercero = action
  })),
  on(SharedActions.cargarConceptos, (state, action) => ({
    ...state, Conceptos: state.Conceptos = action
  })),
  on(SharedActions.cargarConcepto, (state, action) => ({
    ...state, Concepto: state.Concepto = action
  })),
  on(SharedActions.cargarParametros, (state, action) => ({
    ...state, Parametros: state.Parametros = action
  })),
  on(SharedActions.cargarParametrosHijos, (state, action) => ({
    ...state, ParametrosHijos: state.ParametrosHijos = action
  })),
  on(SharedActions.cargarTipoComprobante, (state, action) => ({
    ...state, TipoComprobante: state.TipoComprobante = action
  })),
  on(SharedActions.SeleccionarRubro, (state, action) => ({
    ...state, RubroSeleccionado: state.RubroSeleccionado = action
  })),
  on(SharedActions.cargarRubro, (state, action) => ({
    ...state, Rubro: state.Rubro = action
  })),
  on(SharedActions.SeleccionarCuentaContable, (state, action) => ({
    ...state, CuentaContableSeleccionada: state.CuentaContableSeleccionada = action
  })),
  on(SharedActions.cargarCuentaDebito, (state, action) => ({
    ...state, CuentaDebito: state.CuentaDebito = action
  })),
  on(SharedActions.cargarCuentaCredito, (state, action) => ({
    ...state, CuentaCredito: state.CuentaCredito = action
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return sharedReducer(state, action);
}
