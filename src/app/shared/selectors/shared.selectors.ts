import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromShared from '../reducers/shared.reducer';

export const selectSharedState = createFeatureSelector<fromShared.State>(
  fromShared.sharedFeatureKey
);

export const getArbolRubro = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.ArbolRubro
);

export const getNodoSeleccionado = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.NodoSeleccionado
);

export const getFilaSeleccionada = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.FilaSeleccionada
);

export const getAccionTabla = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.AccionTabla
);

export const getVigenciaActual = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.VigenciaActual
);

export const getAreaFuncional = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.AreaFuncional
);

export const getCentroGestor = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.CentroGestor
);

export const getModalidadesSeleccion = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.ModalidadesSeleccion
);

export const selectTiposID = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.TiposID
);

export const selectDatosID = createSelector(
  selectSharedState,
  (state: fromShared.State, clave: string) => state.DatosID[clave]
);

export const selectVigencias = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.Vigencias
);

export const selectVigenciasNoFuturas = createSelector(
  selectSharedState,
  (state: fromShared.State) => {
    if (state.Vigencias && state.Vigencias[0])
      state.Vigencias[0] = state.Vigencias[0].filter(
        vigencia => vigencia.estado !== 'Futura');
    return state.Vigencias;
  }
);

export const seleccionarProveedores = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.Proveedores
);

export const seleccionarTelefonosProveedores = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.TelefonosProveedores
);

export const seleccionarOrdenadores = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.Ordenadores
);

export const seleccionarDependencias = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.Dependencias
);

export const seleccionarFacultadesProyectos = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.FacultadesProyectos
);

export const seleccionarBancos = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.Bancos
);

export const seleccionarIdSucursales = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.IdSucursales
);

export const seleccionarSucursales = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.Sucursales
);

export const seleccionarDivisas = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.Divisas
);

export const seleccionarRecursos = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.Recursos
);

export const seleccionarTipoCuentas = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.TipoCuentas
);

export const seleccionarCuentasBancarias = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.CuentasBancarias
);

export const seleccionarTipoContribuyente = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.TipoContribuyente
);

export const seleccionarTipoDocumento = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.TipoDocumento
);

export const seleccionarBancoByNit = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.BancoByNit
);

export const seleccionarInfoComplementaria = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.InfoComplementaria
);

export const seleccionarBancosMid = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.BancosMid
);

export const seleccionarTipoTercero = createSelector(
  selectSharedState,
  (state: fromShared.State) => state.TipoTercero
);
