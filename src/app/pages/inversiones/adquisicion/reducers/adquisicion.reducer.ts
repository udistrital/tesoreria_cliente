import { Action, createReducer, on } from '@ngrx/store';
import * as AdquisicionActions from '../actions/adquisicion.actions';

export const adquisicionFeatureKey = 'adquisicion';

export interface State {
  Inversioninicial: any;

}

export const initialState: State = {
  Inversioninicial: null,

};

const adquisicionReducer = createReducer(
  initialState,
  on(AdquisicionActions.loadInversioninicial, (state, action) => ({
    ...state, Inversioninicial: state.Inversioninicial = action
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return adquisicionReducer(state, action);
}
