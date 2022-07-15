import { createReducer, Action, on } from '@ngrx/store';
import * as CuentaBancariaActions from '../actions/cuentaBancaria.action';

export const cuentasBancariasFeatureKey = 'cuentasBancarias';

export interface State {
    recursos: any;
    divisas: any;
    tiposCuenta: any;
    bancos: any;
    sucursales: any;
}

export const initialState: State = {
    recursos: null,
    divisas: null,
    tiposCuenta: null,
    bancos: null,
    sucursales: null,
};

const sucursalesReducer = createReducer(
    initialState,
);

export function reducer(state: State | undefined, action: Action) {
    return sucursalesReducer(state, action);
}
