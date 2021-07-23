import { Action, createReducer, on } from '@ngrx/store';
import * as AdquisicionActions from '../actions/adquisicion.actions';

export const adquisicionFeatureKey = 'adquisicion';

export interface State {
  Inversioninicial: any;
  Rendimientos: any;

}

export const initialState: State = {
  Inversioninicial: null,
  Rendimientos: null


};

const adquisicionReducer = createReducer(
  initialState,
  on(AdquisicionActions.loadInversioninicial, (state, action) => ({
    ...state, Inversioninicial: state.Inversioninicial = action
  })),
  on(AdquisicionActions.loadRendimientos, (state, action) => ({
    ...state, Rendimientos: state.Rendimientos = action
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return adquisicionReducer(state, action);
}
