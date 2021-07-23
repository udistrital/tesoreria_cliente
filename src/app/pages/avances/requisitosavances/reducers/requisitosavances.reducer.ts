import { Action, createReducer, on } from '@ngrx/store';
import * as RequisitosavancesActions from '../actions/requisitosavances.actions';

export const requisitosavancesFeatureKey = 'requisitosavances';

export interface State {
  requisitoAvanceSeleccionado: any;
}

export const initialState: State = {
  requisitoAvanceSeleccionado: null,
};

const requisitosavancesReducer = createReducer(
  initialState,

  on(RequisitosavancesActions.loadRequisitosavances, state => state),
  on(RequisitosavancesActions.loadRequisitoSelecionado, (state, action) => ({
    ...state, requisitoAvanceSeleccionado: state.requisitoAvanceSeleccionado = action
  })),

);

export function reducer(state: State | undefined, action: Action) {
  return requisitosavancesReducer(state, action);
}
