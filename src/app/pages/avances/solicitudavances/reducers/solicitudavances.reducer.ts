import { Action, createReducer, on } from '@ngrx/store';
import * as SolicitudavancesActions from '../actions/solicitudavances.actions';

export const solicitudavancesFeatureKey = 'solicitudavances';

export interface State {
    SolicitudavnacesSeleccionado: any;
    AdjuntarRequisitos: any;
    solicitudesAvance: any;
}

export const initialState: State = {
    SolicitudavnacesSeleccionado: null,
    AdjuntarRequisitos: null,
    solicitudesAvance: null
};

const solicitudavancesReducer = createReducer(
    initialState,

    on(SolicitudavancesActions.loadSolicitudavances, state => state),
    on(SolicitudavancesActions.loadAdjuntarRequisitos, (state, action) => ({
        ...state, AdjuntarRequisitos: state.AdjuntarRequisitos = action
    })),
    on(SolicitudavancesActions.cargarSolicitudesAvance, (state, action) => ({
        ...state, solicitudesAvance: state.solicitudesAvance = action
      })),
);

export function reducer(state: State | undefined, action: Action) {
    return solicitudavancesReducer(state, action);
  }
