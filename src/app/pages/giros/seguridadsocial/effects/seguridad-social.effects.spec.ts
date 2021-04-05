import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SeguridadSocialEffects } from './seguridad-social.effects';

describe('SeguridadSocialEffects', () => {
  const actions$: Observable<any> = new Observable ();
  let effects: SeguridadSocialEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SeguridadSocialEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<SeguridadSocialEffects>(SeguridadSocialEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
