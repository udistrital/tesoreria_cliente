import * as fromGirocheques from '../reducers/girocheques.reducer';
import { selectGirochequesState } from './girocheques.selectors';

describe('Girocheques Selectors', () => {
  it('should select the feature state', () => {
    const result = selectGirochequesState({
      [fromGirocheques.girochequesFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
