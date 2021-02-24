import * as fromEjecucion from '../reducers/ejecucion.reducer';
import { selectEjecucionState } from './ejecucion.selectors';

describe('Ejecucion Selectors', () => {
  it('should select the feature state', () => {
    const result = selectEjecucionState({
      [fromEjecucion.ejecucionFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
