import { Action, createReducer, on } from '@ngrx/store';
import * as LegalizacionavanceActions from '../actions/legalizacionavance.actions';

export const legalizacionavanceFeatureKey = 'legalizacionavance';

export interface State {
  tipoLegalizacion: any;
}

export const initialState: State = {
  tipoLegalizacion: null
};

const legalizacionavanceReducer = createReducer(
  initialState,

  on(LegalizacionavanceActions.loadLegalizacionavances, state => state),
  on(LegalizacionavanceActions.loadTipoLegalizacion, (state, action) => ({
    ...state, tipoLegalizacion: state.tipoLegalizacion = action
  })),

);

export function reducer(state: State | undefined, action: Action) {
  return legalizacionavanceReducer(state, action);
}
