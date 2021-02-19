import { Action, createReducer, on } from '@ngrx/store';
import * as GirochequesActions from '../actions/girocheques.actions';

export const girochequesFeatureKey = 'girocheques';

export interface State {

}

export const initialState: State = {

};

const girochequesReducer = createReducer(
  initialState,

  on(GirochequesActions.loadGirochequess, state => state),
  on(GirochequesActions.loadGirochequessSuccess, (state, action) => state),
  on(GirochequesActions.loadGirochequessFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return girochequesReducer(state, action);
}
