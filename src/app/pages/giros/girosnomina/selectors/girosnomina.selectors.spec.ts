import * as fromGirosnomina from '../reducers/girosnomina.reducer';
import { selectGirosnominaState } from './girosnomina.selectors';

describe('Girosnomina Selectors', () => {
  it('should select the feature state', () => {
    const result = selectGirosnominaState({
      [fromGirosnomina.girosnominaFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
