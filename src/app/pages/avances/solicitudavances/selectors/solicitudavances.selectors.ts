import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSolicitudavances from '../reducers/solicitudavances.reducer';

export const selectSolicitudavancesState = createFeatureSelector<fromSolicitudavances.State>(
    fromSolicitudavances.solicitudavancesFeatureKey
);

export const getAdjuntarRequisitos = createSelector(
    selectSolicitudavancesState,
    (state: fromSolicitudavances.State) => state.AdjuntarRequisitos
);

export const seleccionarSolicitudesAvance = createSelector(
    selectSolicitudavancesState,
    (state: fromSolicitudavances.State) => state.solicitudesAvance
);

export const seleccionarInfoFuncionario = createSelector(
    selectSolicitudavancesState,
    (state: fromSolicitudavances.State) => state.infoFuncionario
);

export const seleccionarDescripcionSolicitud = createSelector(
    selectSolicitudavancesState,
    (state: fromSolicitudavances.State) => state.descripcionSolicitud
);

export const seleccionarTiposAvances = createSelector(
    selectSolicitudavancesState,
    (state: fromSolicitudavances.State) => state.tiposAvances
);

