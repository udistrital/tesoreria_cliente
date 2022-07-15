import { createReducer, Action, on } from '@ngrx/store';

export const conceptosFeatureKey = 'conceptos';

export interface State {

}

export const initialState: State = {
    claseTransaccion: null,
    tipoTransaccion: null,
    Parametros: null,
};

const conceptosReducer = createReducer(
    initialState,
);

export function reducer(state: State | undefined, action: Action) {
    return conceptosReducer(state, action);
}
