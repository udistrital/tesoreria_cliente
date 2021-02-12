import { Action, createReducer, on } from '@ngrx/store';
import * as ReintegrosActions from '../actions/reintegros.actions';

export const reintegrosFeatureKey = 'reintegros';

export interface State {
    ReintegrosSeleccionado: any;
}

export const initialState: State = {
    ReintegrosSeleccionado: null,
};

const reintegrosReducer = createReducer(
    initialState,

    on(ReintegrosActions.loadReintegros, state => state),
);

export function reducer(state: State | undefined, action: Action) {
    return reintegrosReducer(state, action);
  }
