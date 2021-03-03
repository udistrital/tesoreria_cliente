import * as fromLegalizacionavance from '../reducers/legalizacionavance.reducer';
import { selectLegalizacionavanceState } from './legalizacionavance.selectors';

describe('Legalizacionavance Selectors', () => {
  it('should select the feature state', () => {
    const result = selectLegalizacionavanceState({
      [fromLegalizacionavance.legalizacionavanceFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
