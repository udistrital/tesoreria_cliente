import { Action, createReducer, on } from '@ngrx/store';
import * as GirochequesActions from '../actions/girocheques.actions';

export const girochequesFeatureKey = 'girocheques';

export interface State {
  DatosContabilizacion: any;
  DatosErogacion: any;
  DatosDetalle: any;
  TablaContabilizacion: any;
}

export const initialState: State = {
  DatosContabilizacion: null,
  DatosErogacion: null,
  DatosDetalle: null,
  TablaContabilizacion: null,
};

const girochequesReducer = createReducer(
  initialState,

  on(GirochequesActions.loadGirochequess, state => state),
  on(GirochequesActions.cargarDatosDetalle, ( state, action) => ({
    ...state, DatosDetalle: state.DatosDetalle = action
  })),
  on(GirochequesActions.cargarDatosErogacion, ( state, action) => ({
    ...state, DatosErogacion: state.DatosErogacion = action
  })),
  on(GirochequesActions.cargarDatosContabilizacion, ( state, action) => ({
    ...state, DatosContabilizacion: state.DatosContabilizacion = action
  })),
  on(GirochequesActions.cargarTablaContabilizacion, ( state, action) => ({
    ...state, TablaContabilizacion: state.TablaContabilizacion = action
  })),

);

export function reducer(state: State | undefined, action: Action) {
  return girochequesReducer(state, action);
}
