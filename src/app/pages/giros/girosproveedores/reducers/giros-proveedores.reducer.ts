import { Action, createReducer, on } from '@ngrx/store';
import * as GirosProveedoresActions from '../actions/giros-proveedores.actions';

export const girosProveedoresFeatureKey = 'girosProveedores';

export interface State {

}

export const initialState: State = {

};

const girosProveedoresReducer = createReducer(
  initialState,

  on(GirosProveedoresActions.loadGirosProveedoress, state => state),
  on(GirosProveedoresActions.loadGirosProveedoressSuccess, (state, action) => state),
  on(GirosProveedoresActions.loadGirosProveedoressFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return girosProveedoresReducer(state, action);
}
