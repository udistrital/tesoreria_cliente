import * as fromBoletinDiario from '../reducers/boletin-diario.reducer';
import { selectBoletinDiarioState } from './boletin-diario.selectors';

describe('BoletinDiario Selectors', () => {
  it('should select the feature state', () => {
    const result = selectBoletinDiarioState({
      [fromBoletinDiario.boletinDiarioFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
