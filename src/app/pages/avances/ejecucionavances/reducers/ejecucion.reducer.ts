import { Action, createReducer, on } from '@ngrx/store';
import * as EjecucionActions from '../actions/ejecucion.actions';

export const ejecucionFeatureKey = 'ejecucion';

export interface State {

}

export const initialState: State = {

};

const ejecucionReducer = createReducer(
  initialState,

  on(EjecucionActions.loadEjecucions, state => state),
  on(EjecucionActions.loadEjecucionsSuccess, (state, action) => state),
  on(EjecucionActions.loadEjecucionsFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return ejecucionReducer(state, action);
}
