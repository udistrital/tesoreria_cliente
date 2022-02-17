import { createReducer, Action, on } from '@ngrx/store';

export const bancosFeatureKey = 'bancos';

export interface State {
    bancos: any;
    contribuyente: any;
}

export const initialState: State = {
    bancos: null,
    contribuyente: null,
};

const sucursalesReducer = createReducer(
    initialState,
);

export function reducer(state: State | undefined, action: Action) {
    return sucursalesReducer(state, action);
}
