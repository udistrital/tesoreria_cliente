import * as fromAvances from '../reducers/avances.reducer';
import { selectAvancesState } from './avances.selectors';

describe('Avances Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAvancesState({
      [fromAvances.avancesFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
