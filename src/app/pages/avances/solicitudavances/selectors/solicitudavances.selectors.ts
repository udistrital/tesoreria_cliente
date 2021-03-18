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
