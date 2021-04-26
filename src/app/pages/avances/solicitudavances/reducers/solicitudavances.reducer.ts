import { Action, createReducer, on } from '@ngrx/store';
import * as SolicitudavancesActions from '../actions/solicitudavances.actions';

export const solicitudavancesFeatureKey = 'solicitudavances';

export interface State {
    SolicitudavnacesSeleccionado: any;
    AdjuntarRequisitos: any;
    solicitudesAvance: any;
    infoFuncionario: any;
    descripcionSolicitud: any;
    tiposAvances: any;

}

export const initialState: State = {
    SolicitudavnacesSeleccionado: null,
    AdjuntarRequisitos: null,

    solicitudesAvance: null,
    infoFuncionario: null,
    descripcionSolicitud: null,
    tiposAvances: null,

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
    on(SolicitudavancesActions.cargarInfoFuncionario, (state, action) => ({
        ...state, infoFuncionario: state.infoFuncionario = action
    })),
    on(SolicitudavancesActions.cargarDescripcionSolicitud, (state, action) => ({
        ...state, descripcionSolicitud: state.descripcionSolicitud = action
    })),
    on(SolicitudavancesActions.cargarTiposdeAvances, (state, action) => ({
        ...state, tiposAvances: state.tiposAvances = action
    })),

);

export function reducer(state: State | undefined, action: Action) {
    return solicitudavancesReducer(state, action);
}
