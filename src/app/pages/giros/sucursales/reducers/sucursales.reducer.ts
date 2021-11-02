import { createReducer, Action, on } from '@ngrx/store';
import * as SucursalesActions from '../actions/sucursales.actions';

export const sucursalesFeatureKey = 'sucursales';

export interface State {
    sucursales: any;
    bancos: any;
}

export const initialState: State = {
    sucursales: null,
    bancos: null,
};

const sucursalesReducer = createReducer(
    initialState,
);

export function reducer(state: State | undefined, action: Action) {
    return sucursalesReducer(state, action);
}
