import * as fromEspecificacionesavances from '../reducers/especificacionesavances.reducer';
import { selectEspecificacionesavancesState } from './especificacionesavances.selectors';

describe('Especificacionesavances Selectors', () => {
  it('should select the feature state', () => {
    const result = selectEspecificacionesavancesState({
      [fromEspecificacionesavances.especificacionesavancesFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
