import { Action, createReducer, on } from '@ngrx/store';
import * as GirosProveedoresActions from '../actions/giros-proveedores.actions';

export const girosProveedoresFeatureKey = 'girosProveedores';

export interface State {
  DatosInformacion: any;
  DatosOrdenPago: any;
  DatosOrdenesPago: any;
  DatosBeneficiarios: any;
  DatosBancoProveedores: any;
  DatosTercero: any;
}

export const initialState: State = {
  DatosInformacion: null,
  DatosOrdenPago: null,
  DatosOrdenesPago: null,
  DatosBeneficiarios: null,
  DatosBancoProveedores: null,
  DatosTercero: null
};

const girosProveedoresReducer = createReducer(
  initialState,

  on(GirosProveedoresActions.loadGirosProveedoress, state => state),
  on(GirosProveedoresActions.cargarDatosInformacion, (state, action) => ({
    ...state, DatosInformacion:  state.DatosInformacion = action
  })),
  on(GirosProveedoresActions.cargarDatosOrdenPago, (state, action) => ({
    ...state, DatosOrdenPago:  state.DatosOrdenPago = action
  })),
  on(GirosProveedoresActions.cargarDatosOrdenesPago, (state, action) => ({
    ...state, DatosOrdenesPago:  state.DatosOrdenesPago = action
  })),
  on(GirosProveedoresActions.cargarDatosBeneficiarios, (state, action) => ({
    ...state, DatosBeneficiarios:  state.DatosBeneficiarios = action
  })),
  on(GirosProveedoresActions.cargarDatosBancoProveedores, (state, action) => ({
    ...state, DatosBancoProveedores:  state.DatosBancoProveedores = action
  })),
  on(GirosProveedoresActions.cargarDatosTercero, (state, action) => ({
    ...state, DatosTercero:  state.DatosTercero = action
  })),

);

export function reducer(state: State | undefined, action: Action) {
  return girosProveedoresReducer(state, action);
}
