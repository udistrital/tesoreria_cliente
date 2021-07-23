import * as fromRequisitosavances from '../reducers/requisitosavances.reducer';
import { selectRequisitosavancesState } from './requisitosavances.selectors';

describe('Requisitosavances Selectors', () => {
  it('should select the feature state', () => {
    const result = selectRequisitosavancesState({
      [fromRequisitosavances.requisitosavancesFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
