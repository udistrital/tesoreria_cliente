import * as fromSeguridadSocial from '../reducers/seguridad-social.reducer';
import { selectSeguridadSocialState } from './seguridad-social.selectors';

describe('SeguridadSocial Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSeguridadSocialState({
      [fromSeguridadSocial.seguridadSocialFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
