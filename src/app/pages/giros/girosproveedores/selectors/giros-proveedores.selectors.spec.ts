import * as fromGirosProveedores from '../reducers/giros-proveedores.reducer';
import { selectGirosProveedoresState } from './giros-proveedores.selectors';

describe('GirosProveedores Selectors', () => {
  it('should select the feature state', () => {
    const result = selectGirosProveedoresState({
      [fromGirosProveedores.girosProveedoresFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
