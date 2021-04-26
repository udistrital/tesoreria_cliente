import * as fromIngresos from '../reducers/ingresos.reducer';
import { selectIngresosState } from './ingresos.selectors';

describe('Ingresos Selectors', () => {
  it('should select the feature state', () => {
    const result = selectIngresosState({
      [fromIngresos.ingresosFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
