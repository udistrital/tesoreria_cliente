import { Action, createReducer, on } from '@ngrx/store';
import * as BoletinDiarioActions from '../actions/boletin-diario.actions';

export const boletinDiarioFeatureKey = 'boletinDiario';

export interface State {

}

export const initialState: State = {

};

const boletinDiarioReducer = createReducer(
  initialState,

  on(BoletinDiarioActions.loadBoletinDiarios, state => state),

);

export function reducer(state: State | undefined, action: Action) {
  return boletinDiarioReducer(state, action);
}
